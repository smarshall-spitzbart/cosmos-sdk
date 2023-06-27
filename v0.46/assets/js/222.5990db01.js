(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{746:function(e,o,t){"use strict";t.r(o);var a=t(1),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("h2",{attrs:{id:"group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[e._v("#")]),e._v(" Group")]),e._v(" "),t("p",[e._v("A group is simply an aggregation of accounts with associated weights. It is not\nan account and doesn't have a balance. It doesn't in and of itself have any\nsort of voting or decision weight. It does have an \"administrator\" which has\nthe ability to add, remove and update members in the group. Note that a\ngroup policy account could be an administrator of a group, and that the\nadministrator doesn't necessarily have to be a member of the group.")]),e._v(" "),t("h2",{attrs:{id:"group-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-policy"}},[e._v("#")]),e._v(" Group Policy")]),e._v(" "),t("p",[e._v('A group policy is an account associated with a group and a decision policy.\nGroup policies are abstracted from groups because a single group may have\nmultiple decision policies for different types of actions. Managing group\nmembership separately from decision policies results in the least overhead\nand keeps membership consistent across different policies. The pattern that\nis recommended is to have a single master group policy for a given group,\nand then to create separate group policies with different decision policies\nand delegate the desired permissions from the master account to\nthose "sub-accounts" using the '),t("code",[e._v("x/authz")]),e._v(" module.")]),e._v(" "),t("h2",{attrs:{id:"decision-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision-policy"}},[e._v("#")]),e._v(" Decision Policy")]),e._v(" "),t("p",[e._v("A decision policy is the mechanism by which members of a group can vote on\nproposals, as well as the rules that dictate whether a proposal should pass\nor not based on its tally outcome.")]),e._v(" "),t("p",[e._v("All decision policies generally would have a mininum execution period and a\nmaximum voting window. The minimum execution period is the minimum amount of time\nthat must pass after submission in order for a proposal to potentially be executed, and it may\nbe set to 0. The maximum voting window is the maximum time after submission that a proposal may\nbe voted on before it is tallied.")]),e._v(" "),t("p",[e._v("The chain developer also defines an app-wide maximum execution period, which is\nthe maximum amount of time after a proposal's voting period end where users are\nallowed to execute a proposal.")]),e._v(" "),t("p",[e._v("The current group module comes shipped with two decision policies: threshold\nand percentage. Any chain developer can extend upon these two, by creating\ncustom decision policies, as long as they adhere to the "),t("code",[e._v("DecisionPolicy")]),e._v("\ninterface:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGVjaXNpb25Qb2xpY3kgaXMgdGhlIHBlcnNpc3RlbnQgc2V0IG9mIHJ1bGVzIHRvIGRldGVybWluZSB0aGUgcmVzdWx0IG9mIGVsZWN0aW9uIG9uIGEgcHJvcG9zYWwuCnR5cGUgRGVjaXNpb25Qb2xpY3kgaW50ZXJmYWNlIHsKCWNvZGVjLlByb3RvTWFyc2hhbGVyCgoJLy8gR2V0Vm90aW5nUGVyaW9kIHJldHVybnMgdGhlIGR1cmF0aW9uIGFmdGVyIHByb3Bvc2FsIHN1Ym1pc3Npb24gd2hlcmUKCS8vIHZvdGVzIGFyZSBhY2NlcHRlZC4KCUdldFZvdGluZ1BlcmlvZCgpIHRpbWUuRHVyYXRpb24KCS8vIEFsbG93IGRlZmluZXMgcG9saWN5LXNwZWNpZmljIGxvZ2ljIHRvIGFsbG93IGEgcHJvcG9zYWwgdG8gcGFzcyBvciBub3QsCgkvLyBiYXNlZCBvbiBpdHMgdGFsbHkgcmVzdWx0LCB0aGUgZ3JvdXAncyB0b3RhbCBwb3dlciBhbmQgdGhlIHRpbWUgc2luY2UKCS8vIHRoZSBwcm9wb3NhbCB3YXMgc3VibWl0dGVkLgoJQWxsb3codGFsbHlSZXN1bHQgVGFsbHlSZXN1bHQsIHRvdGFsUG93ZXIgc3RyaW5nLCBzaW5jZVN1Ym1pc3Npb24gdGltZS5EdXJhdGlvbikgKERlY2lzaW9uUG9saWN5UmVzdWx0LCBlcnJvcikKCglWYWxpZGF0ZUJhc2ljKCkgZXJyb3IKCVZhbGlkYXRlKGcgR3JvdXBJbmZvLCBjb25maWcgQ29uZmlnKSBlcnJvcgp9"}})],1),e._v(" "),t("h3",{attrs:{id:"threshold-decision-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threshold-decision-policy"}},[e._v("#")]),e._v(" Threshold decision policy")]),e._v(" "),t("p",[e._v("A threshold decision policy defines a threshold of yes votes (based on a tally\nof voter weights) that must be achieved in order for a proposal to pass. For\nthis decision policy, abstain and veto are simply treated as no's.")]),e._v(" "),t("h3",{attrs:{id:"percentage-decision-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#percentage-decision-policy"}},[e._v("#")]),e._v(" Percentage decision policy")]),e._v(" "),t("p",[e._v("A percentage decision policy is similar to a threshold decision policy, except\nthat the threshold is not defined as a constant weight, but as a percentage.\nIt's more suited for groups where the group members' weights can be updated, as\nthe percentage threshold stays the same, and doesn't depend on how those member\nweights get updated.")]),e._v(" "),t("h2",{attrs:{id:"proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),t("p",[e._v("Any member(s) of a group can submit a proposal for a group policy account to decide upon.\nA proposal consists of a set of messages that will be executed if the proposal\npasses as well as any metadata associated with the proposal.")]),e._v(" "),t("h3",{attrs:{id:"voting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voting"}},[e._v("#")]),e._v(" Voting")]),e._v(" "),t("p",[e._v("There are four choices to choose while voting - yes, no, abstain and veto. Not\nall decision policies will take the four choices into account. Votes can contain some optional metadata.\nIn the current implementation, the voting window begins as soon as a proposal\nis submitted, and the end is defined by the group policy's decision policy.")]),e._v(" "),t("h3",{attrs:{id:"withdrawing-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdrawing-proposals"}},[e._v("#")]),e._v(" Withdrawing Proposals")]),e._v(" "),t("p",[e._v("Proposals can be withdrawn any time before the voting period end, either by the\nadmin of the group policy or by one of the proposers. Once withdrawn, it is\nmarked as "),t("code",[e._v("PROPOSAL_STATUS_WITHDRAWN")]),e._v(", and no more voting or execution is\nallowed on it.")]),e._v(" "),t("h3",{attrs:{id:"aborted-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aborted-proposals"}},[e._v("#")]),e._v(" Aborted Proposals")]),e._v(" "),t("p",[e._v("If the group policy is updated during the voting period of the proposal, then\nthe proposal is marked as "),t("code",[e._v("PROPOSAL_STATUS_ABORTED")]),e._v(", and no more voting or\nexecution is allowed on it. This is because the group policy defines the rules\nof proposal voting and execution, so if those rules change during the lifecycle\nof a proposal, then the proposal should be marked as stale.")]),e._v(" "),t("h3",{attrs:{id:"tallying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tallying"}},[e._v("#")]),e._v(" Tallying")]),e._v(" "),t("p",[e._v("Tallying is the counting of all votes on a proposal. It happens only once in\nthe lifecycle of a proposal, but can be triggered by two factors, whichever\nhappens first:")]),e._v(" "),t("ul",[t("li",[e._v("either someone tries to execute the proposal (see next section), which can\nhappen on a "),t("code",[e._v("Msg/Exec")]),e._v(" transaction, or a "),t("code",[e._v("Msg/{SubmitProposal,Vote}")]),e._v("\ntransaction with the "),t("code",[e._v("Exec")]),e._v(" field set. When a proposal execution is attempted,\na tally is done first to make sure the proposal passes.")]),e._v(" "),t("li",[e._v("or on "),t("code",[e._v("EndBlock")]),e._v(" when the proposal's voting period end just passed.")])]),e._v(" "),t("p",[e._v("If the tally result passes the decision policy's rules, then the proposal is\nmarked as "),t("code",[e._v("PROPOSAL_STATUS_ACCEPTED")]),e._v(", or else it is marked as\n"),t("code",[e._v("PROPOSAL_STATUS_REJECTED")]),e._v(". In any case, no more voting is allowed anymore, and the tally\nresult is persisted to state in the proposal's "),t("code",[e._v("FinalTallyResult")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"executing-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executing-proposals"}},[e._v("#")]),e._v(" Executing Proposals")]),e._v(" "),t("p",[e._v("Proposals are executed only when the tallying is done, and the group account's\ndecision policy allows the proposal to pass based on the tally outcome. They\nare marked by the status "),t("code",[e._v("PROPOSAL_STATUS_ACCEPTED")]),e._v(". Execution must happen\nbefore a duration of "),t("code",[e._v("MaxExecutionPeriod")]),e._v(" (set by the chain developer) after\neach proposal's voting period end.")]),e._v(" "),t("p",[e._v("Proposals will not be automatically executed by the chain in this current design,\nbut rather a user must submit a "),t("code",[e._v("Msg/Exec")]),e._v(" transaction to attempt to execute the\nproposal based on the current votes and decision policy. Any user (not only the\ngroup members) can execute proposals that have been accepted, and execution fees are\npaid by the proposal executor.\nIt's also possible to try to execute a proposal immediately on creation or on\nnew votes using the "),t("code",[e._v("Exec")]),e._v(" field of "),t("code",[e._v("Msg/SubmitProposal")]),e._v(" and "),t("code",[e._v("Msg/Vote")]),e._v(" requests.\nIn the former case, proposers signatures are considered as yes votes.\nIn these cases, if the proposal can't be executed (i.e. it didn't pass the\ndecision policy's rules), it will still be opened for new votes and\ncould be tallied and executed later on.")]),e._v(" "),t("p",[e._v("A successful proposal execution will have its "),t("code",[e._v("ExecutorResult")]),e._v(" marked as\n"),t("code",[e._v("PROPOSAL_EXECUTOR_RESULT_SUCCESS")]),e._v(". The proposal will be automatically pruned\nafter execution. On the other hand, a failed proposal execution will be marked\nas "),t("code",[e._v("PROPOSAL_EXECUTOR_RESULT_FAILURE")]),e._v(". Such a proposal can be re-executed\nmultiple times, until it expires after "),t("code",[e._v("MaxExecutionPeriod")]),e._v(" after voting period\nend.")]),e._v(" "),t("h2",{attrs:{id:"pruning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pruning"}},[e._v("#")]),e._v(" Pruning")]),e._v(" "),t("p",[e._v("Proposals and votes are automatically pruned to avoid state bloat.")]),e._v(" "),t("p",[e._v("Votes are pruned:")]),e._v(" "),t("ul",[t("li",[e._v("either after a successful tally, i.e. a tally whose result passes the decision\npolicy's rules, which can be trigged by a "),t("code",[e._v("Msg/Exec")]),e._v(" or a\n"),t("code",[e._v("Msg/{SubmitProposal,Vote}")]),e._v(" with the "),t("code",[e._v("Exec")]),e._v(" field set,")]),e._v(" "),t("li",[e._v("or on "),t("code",[e._v("EndBlock")]),e._v(" right after the proposal's voting period end. This applies to proposals with status "),t("code",[e._v("aborted")]),e._v(" or "),t("code",[e._v("withdrawn")]),e._v(" too.")])]),e._v(" "),t("p",[e._v("whichever happens first.")]),e._v(" "),t("p",[e._v("Proposals are pruned:")]),e._v(" "),t("ul",[t("li",[e._v("on "),t("code",[e._v("EndBlock")]),e._v(" whose proposal status is "),t("code",[e._v("withdrawn")]),e._v(" or "),t("code",[e._v("aborted")]),e._v(" on proposal's voting period end before tallying,")]),e._v(" "),t("li",[e._v("and either after a successful proposal execution,")]),e._v(" "),t("li",[e._v("or on "),t("code",[e._v("EndBlock")]),e._v(" right after the proposal's "),t("code",[e._v("voting_period_end")]),e._v(" +\n"),t("code",[e._v("max_execution_period")]),e._v(" (defined as an app-wide configuration) is passed,")])]),e._v(" "),t("p",[e._v("whichever happens first.")])])}),[],!1,null,null,null);o.default=s.exports}}]);