package params

import (
	"context"
	"encoding/json"
	"math/rand"

	gwruntime "github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/spf13/cobra"
	abci "github.com/tendermint/tendermint/abci/types"

	"github.com/cosmos/cosmos-sdk/runtime"

	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/container"
	store "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/params/client/cli"
	"github.com/cosmos/cosmos-sdk/x/params/keeper"
	"github.com/cosmos/cosmos-sdk/x/params/simulation"
	"github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/cosmos/cosmos-sdk/x/params/types/proposal"
)

var (
	_ module.AppModule           = AppModule{}
	_ module.AppModuleBasic      = AppModuleBasic{}
	_ module.AppModuleSimulation = AppModule{}
)

// AppModuleBasic defines the basic application module used by the params module.
type AppModuleBasic struct{}

// Name returns the params module's name.
func (AppModuleBasic) Name() string {
	return proposal.ModuleName
}

// RegisterLegacyAminoCodec registers the params module's types on the given LegacyAmino codec.
func (AppModuleBasic) RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	proposal.RegisterLegacyAminoCodec(cdc)
}

// DefaultGenesis returns default genesis state as raw bytes for the params
// module.
func (AppModuleBasic) DefaultGenesis(_ codec.JSONCodec) json.RawMessage { return nil }

// ValidateGenesis performs genesis state validation for the params module.
func (AppModuleBasic) ValidateGenesis(_ codec.JSONCodec, config client.TxEncodingConfig, _ json.RawMessage) error {
	return nil
}

// RegisterGRPCGatewayRoutes registers the gRPC Gateway routes for the params module.
func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *gwruntime.ServeMux) {
	if err := proposal.RegisterQueryHandlerClient(context.Background(), mux, proposal.NewQueryClient(clientCtx)); err != nil {
		panic(err)
	}
}

// GetTxCmd returns no root tx command for the params module.
func (AppModuleBasic) GetTxCmd() *cobra.Command { return nil }

// GetQueryCmd returns no root query command for the params module.
func (AppModuleBasic) GetQueryCmd() *cobra.Command {
	return cli.NewQueryCmd()
}

func (am AppModuleBasic) RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	proposal.RegisterInterfaces(registry)
}

// AppModule implements an application module for the distribution module.
type AppModule struct {
	AppModuleBasic

	keeper keeper.Keeper
}

// NewAppModule creates a new AppModule object
func NewAppModule(k keeper.Keeper) AppModule {
	return AppModule{
		AppModuleBasic: AppModuleBasic{},
		keeper:         k,
	}
}

func (am AppModule) RegisterInvariants(_ sdk.InvariantRegistry) {}

// InitGenesis performs a no-op.
func (am AppModule) InitGenesis(_ sdk.Context, _ codec.JSONCodec, _ json.RawMessage) []abci.ValidatorUpdate {
	return []abci.ValidatorUpdate{}
}

// Deprecated: Route returns the message routing key for the params module.
func (AppModule) Route() sdk.Route {
	return sdk.Route{}
}

// GenerateGenesisState performs a no-op.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {}

// QuerierRoute returns the x/param module's querier route name.
func (AppModule) QuerierRoute() string { return types.QuerierRoute }

// LegacyQuerierHandler returns the x/params querier handler.
func (am AppModule) LegacyQuerierHandler(legacyQuerierCdc *codec.LegacyAmino) sdk.Querier {
	return keeper.NewQuerier(am.keeper, legacyQuerierCdc)
}

// RegisterServices registers a gRPC query service to respond to the
// module-specific gRPC queries.
func (am AppModule) RegisterServices(cfg module.Configurator) {
	proposal.RegisterQueryServer(cfg.QueryServer(), am.keeper)

}

// ProposalContents returns all the params content functions used to
// simulate governance proposals.
func (am AppModule) ProposalContents(simState module.SimulationState) []simtypes.WeightedProposalContent {
	return simulation.ProposalContents(simState.ParamChanges)
}

// RandomizedParams creates randomized distribution param changes for the simulator.
func (AppModule) RandomizedParams(r *rand.Rand) []simtypes.ParamChange {
	return nil
}

// RegisterStoreDecoder doesn't register any type.
func (AppModule) RegisterStoreDecoder(sdr sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(_ module.SimulationState) []simtypes.WeightedOperation {
	return nil
}

// ExportGenesis performs a no-op.
func (am AppModule) ExportGenesis(_ sdk.Context, _ codec.JSONCodec) json.RawMessage {
	return nil
}

// ConsensusVersion implements AppModule/ConsensusVersion.
func (AppModule) ConsensusVersion() uint64 { return 1 }

// BeginBlock performs a no-op.
func (AppModule) BeginBlock(_ sdk.Context, _ abci.RequestBeginBlock) {}

// EndBlock performs a no-op.
func (AppModule) EndBlock(_ sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {
	return []abci.ValidatorUpdate{}
}

func init() {
	// TODO:
	//appmodule.Register(&modulev1.Module{},
	//	appmodule.Provide(
	//		provideModuleBasic,
	//		provideModule,
	//		provideSubSpace,
	//	))
}

func provideModuleBasic() runtime.AppModuleBasicWrapper {
	return runtime.WrapAppModuleBasic(AppModuleBasic{})
}

func provideModule(
	kvStoreKey *store.KVStoreKey,
	transientStoreKey *store.TransientStoreKey,
	cdc codec.Codec,
	amino *codec.LegacyAmino,
) (keeper.Keeper, runtime.AppModuleWrapper, runtime.BaseAppOption) {

	k := keeper.NewKeeper(cdc, amino, kvStoreKey, transientStoreKey)
	m := NewAppModule(k)
	baseappOpt := func(app *baseapp.BaseApp) {
		app.SetParamStore(k.Subspace(baseapp.Paramspace).WithKeyTable(types.ConsensusParamsKeyTable()))
	}
	return k, runtime.WrapAppModule(m), baseappOpt
}

func provideSubSpace(key container.ModuleKey, k keeper.Keeper) types.Subspace {
	return k.Subspace(key.Name())
}
