package ormtable

import (
	"encoding/json"
	"io"

	"github.com/cosmos/cosmos-sdk/orm/encoding/ormkv"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"

	"github.com/cosmos/cosmos-sdk/orm/model/kvstore"
)

// View defines a read-only table.
//
// It exists as a separate interacted to support future scenarios where
// tables may be "supported" virtually to provide compatibility between
// systems, for instance to enable backwards compatibility when a major
// migration needs to be performed.
type View interface {
	UniqueIndex

	// GetIndex returns the index referenced by the provided fields if
	// one exists or nil. Note that some concrete indexes can be retrieved by
	// multiple FieldNames.
	GetIndex(fields FieldNames) Index

	// GetUniqueIndex returns the unique index referenced by the provided fields if
	// one exists or nil. Note that some concrete indexes can be retrieved by
	// multiple FieldNames.
	GetUniqueIndex(fields FieldNames) UniqueIndex

	// Indexes returns all the concrete indexes for the table.
	Indexes() []Index
}

// Table is an abstract interface around a concrete table.
type Table interface {
	View

	ormkv.EntryCodec

	// Save saves the provided entry in the store.
	Save(store kvstore.IndexCommitmentStore, message proto.Message, mode SaveMode) error

	// Delete deletes the entry with the provided primary key values from the store.
	Delete(store kvstore.IndexCommitmentStore, primaryKey []protoreflect.Value) error

	// DefaultJSON returns default JSON that can be used as a template for
	// genesis files.
	//
	// For regular tables this an empty JSON array, but for singletons an
	// empty instance of the singleton is marshaled.
	DefaultJSON() json.RawMessage

	// ValidateJSON validates JSON streamed from the reader.
	ValidateJSON(io.Reader) error

	// ImportJSON imports JSON into the store, streaming one entry at a time.
	// Each table should be import from a separate JSON file to enable proper
	// streaming.
	//
	// Regular tables should be stored as an array of objects with each object
	// corresponding to a single record in the table.
	//
	// Auto-incrementing tables
	// can optionally have the last sequence value as the first element in the
	// array. If the last sequence value is provided, then each value of the
	// primary key in the file must be <= this last sequence value or omitted
	// entirely. If no last sequence value is provided, no entries should
	// contain the primary key as this will be auto-assigned.
	//
	// Singletons should define a single object and not an array.
	ImportJSON(kvstore.IndexCommitmentStore, io.Reader) error

	// ExportJSON exports JSON in the format accepted by ImportJSON.
	// Auto-incrementing tables will export the last sequence number as the
	// first element in the JSON array.
	ExportJSON(kvstore.IndexCommitmentReadStore, io.Writer) error
}

// SaveMode defines the save mode for the Table.Save() method.
type SaveMode int

const (
	// SAVE_MODE_DEFAULT instructs Table.Save() to insert or update the
	// entry depending on whether or not the entry already exists in the store.
	SAVE_MODE_DEFAULT SaveMode = iota

	// SAVE_MODE_INSERT instructs Table.Save() to insert the entry or return
	// an error if an entry with the same primary key already exists.
	SAVE_MODE_INSERT

	// SAVE_MODE_UPDATE instructs Table.Save() to update the entry or return
	// an error if an entry with the same primary key does not already exist.
	SAVE_MODE_UPDATE
)
