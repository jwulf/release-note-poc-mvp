# Release Notes for Camunda 8.4.0

A complete list of changes in this release can be viewed on [GitHub](https://github.com/camunda/camunda-platform/releases/tag/8.4.0).

These release notes are a high-level summary of the main features of the release, generated from the GitHub pull requests and issues by AI. 

<!-- vscode-markdown-toc -->
* 1. [Zeebe > Broker](#ZeebeBroker)
	* 1.1. [Zeebe > Broker > Enhancements](#ZeebeBrokerEnhancements)
		* 1.1.1. [Support Index State Management in OpenSearch exporter](#SupportIndexStateManagementinOpenSearchexporterhttps:github.comcamundazeebeissues13203)
	* 1.2. [Zeebe > Broker > Bug Fixes](#ZeebeBrokerBugFixes)
		* 1.2.1. [Failed or cancelled topology change operations block further operations](#Failedorcancelledtopologychangeoperationsblockfurtheroperationshttps:github.comcamundazeebeissues15220)
		* 1.2.2. [Topology received via gossip can bypass merge with locally persisted topology](#Topologyreceivedviagossipcanbypassmergewithlocallypersistedtopologyhttps:github.comcamundazeebeissues15219)
		* 1.2.3. [Potential inconsistency in raft after restoring from a backup](#Potentialinconsistencyinraftafterrestoringfromabackuphttps:github.comcamundazeebeissues14509)
		* 1.2.4. [Deleting a process definition only checks running instances and doesn&#x27;t ignore banned instances](#Deletingaprocessdefinitiononlychecksrunninginstancesanddoesnx27tignorebannedinstanceshttps:github.comcamundazeebeissues14465)
		* 1.2.5. [Static user task assignee value treated as number (leads to an exception)](#Staticusertaskassigneevaluetreatedasnumberleadstoanexceptionhttps:github.comcamundazeebeissues14109)
* 2. [Zeebe > Gateway](#ZeebeGateway)
	* 2.1. [Zeebe > Gateway > Enhancements](#ZeebeGatewayEnhancements)
		* 2.1.1. [Gateway supports multi-tenancy in signal broadcast RPCs](#Gatewaysupportsmulti-tenancyinsignalbroadcastRPCshttps:github.comcamundazeebeissues14277)
	* 2.2. [Zeebe > Gateway > Bug Fixes](#ZeebeGatewayBugFixes)
		* 2.2.1. [Interceptor order is not respected](#Interceptororderisnotrespectedhttps:github.comcamundazeebeissues15677)
* 3. [Zeebe > Java Client](#ZeebeJavaClient)
	* 3.1. [Zeebe > Java Client > Enhancements](#ZeebeJavaClientEnhancements)
		* 3.1.1. [Provide the Java client&#x27;s interfaces for migrating a process instance](#ProvidetheJavaclientx27sinterfacesformigratingaprocessinstancehttps:github.comcamundazeebeissues15161)
		* 3.1.2. [Support migrating a process instance from the Java client](#SupportmigratingaprocessinstancefromtheJavaclienthttps:github.comcamundazeebeissues14921)
		* 3.1.3. [Java client supports multi-tenancy for BroadcastSignal RPC](#Javaclientsupportsmulti-tenancyforBroadcastSignalRPChttps:github.comcamundazeebeissues13558)
	* 3.2. [Zeebe > Java Client > Bug Fixes](#ZeebeJavaClientBugFixes)
		* 3.2.1. [ActivateJobsCommandImpl throws NullPointerException when ZeebeClientProperties.getDefaultJobWorkerName is null](#ActivateJobsCommandImplthrowsNullPointerExceptionwhenZeebeClientProperties.getDefaultJobWorkerNameisnullhttps:github.comcamundazeebeissues14176)
* 4. [Zeebe > Go Client](#ZeebeGoClient)
	* 4.1. [Zeebe > Go Client > Enhancements](#ZeebeGoClientEnhancements)
		* 4.1.1. [Go client commands allow specifying a &#x60;tenantId&#x60; / &#x60;tenantIds&#x60; property](#Goclientcommandsallowspecifyingax60tenantIdx60x60tenantIdsx60propertyhttps:github.comcamundazeebeissues15153)
		* 4.1.2. [Add multi-tenancy support in the Zeebe Go client](#Addmulti-tenancysupportintheZeebeGoclienthttps:github.comcamundazeebeissues14477)
		* 4.1.3. [go-client: Job worker polling backoff mechanism](#go-client:Jobworkerpollingbackoffmechanismhttps:github.comcamundazeebeissues6150)
* 5. [Zeebe > Misc](#ZeebeMisc)
	* 5.1. [Zeebe > Misc > Enhancements](#ZeebeMiscEnhancements)
		* 5.1.1. [Process instance migration supports multi-tenancy](#Processinstancemigrationsupportsmulti-tenancyhttps:github.comcamundazeebeissues15675)
		* 5.1.2. [Revert: Migrate task instances with recreated event subscriptions](#Revert:Migratetaskinstanceswithrecreatedeventsubscriptionshttps:github.comcamundazeebeissues15659)
		* 5.1.3. [Sync Process Instance Migration gRPC documentation with gateway.proto](#SyncProcessInstanceMigrationgRPCdocumentationwithgateway.protohttps:github.comcamundazeebeissues15568)
		* 5.1.4. [Migrate task instances with recreated event subscriptions](#Migratetaskinstanceswithrecreatedeventsubscriptionshttps:github.comcamundazeebeissues15407)
		* 5.1.5. [Allow setting &#x60;scope&#x60; parameter for OAuth2 authentication](#Allowsettingx60scopex60parameterforOAuth2authenticationhttps:github.comcamundazeebeissues15391)
		* 5.1.6. [Configure &#x60;identity-sdk&#x60; through &#x60;identity-spring-boot-starter&#x60; in the Gateway](#Configurex60identity-sdkx60throughx60identity-spring-boot-starterx60intheGatewayhttps:github.comcamundazeebeissues15389)
		* 5.1.7. [Add integration test to &#x60;MultiTenancyOverIdentityIT&#x60; test](#Addintegrationtesttox60MultiTenancyOverIdentityITx60testhttps:github.comcamundazeebeissues15382)
		* 5.1.8. [Support &#x60;UpdateJobTimeout&#x60; RPC in Go Client](#Supportx60UpdateJobTimeoutx60RPCinGoClienthttps:github.comcamundazeebeissues15366)
		* 5.1.9. [Support ElasticSearch 8.9+](#SupportElasticSearch8.9https:github.comcamundazeebeissues15306)
		* 5.1.10. [Update &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files in order to allow user to disable form exporting](#Updatex60broker.yaml.templatex60andx60broker.standalone.yaml.templatex60filesinordertoallowusertodisableformexportinghttps:github.comcamundazeebeissues15193)
		* 5.1.11. [Export compensation subscription events](#Exportcompensationsubscriptioneventshttps:github.comcamundazeebeissues15140)
		* 5.1.12. [Migrate task instances with variables](#Migratetaskinstanceswithvariableshttps:github.comcamundazeebeissues15114)
		* 5.1.13. [Migrate service task instances (including jobs)](#Migrateservicetaskinstancesincludingjobshttps:github.comcamundazeebeissues15113)
		* 5.1.14. [Introduce new compensation subscription record](#Introducenewcompensationsubscriptionrecordhttps:github.comcamundazeebeissues15063)
		* 5.1.15. [Add Job Update Timeout intents](#AddJobUpdateTimeoutintentshttps:github.comcamundazeebeissues15034)
		* 5.1.16. [I can execute a process with an intermediate compensation throw event](#Icanexecuteaprocesswithanintermediatecompensationthroweventhttps:github.comcamundazeebeissues14965)
		* 5.1.17. [The record for a compensation event has the correct event type](#Therecordforacompensationeventhasthecorrecteventtypehttps:github.comcamundazeebeissues14944)
		* 5.1.18. [I can deploy a process with BPMN compensation event subprocesses](#IcandeployaprocesswithBPMNcompensationeventsubprocesseshttps:github.comcamundazeebeissues14943)
		* 5.1.19. [I can deploy a process with BPMN compensation events](#IcandeployaprocesswithBPMNcompensationeventshttps:github.comcamundazeebeissues14942)
		* 5.1.20. [Add support to Java client for Form deletion](#AddsupporttoJavaclientforFormdeletionhttps:github.comcamundazeebeissues14858)
		* 5.1.21. [Replace Dependabot with Renovate](#ReplaceDependabotwithRenovatehttps:github.comcamundazeebeissues14701)
		* 5.1.22. [Use caching for Forms](#UsecachingforFormshttps:github.comcamundazeebeissues14562)
		* 5.1.23. [Support general-usage tenant-providing interceptor for SM](#Supportgeneral-usagetenant-providinginterceptorforSMhttps:github.comcamundazeebeissues14285)
		* 5.1.24. [Support multi-tenancy for Resource Deletion](#Supportmulti-tenancyforResourceDeletionhttps:github.comcamundazeebeissues14279)
		* 5.1.25. [Support deletion of the Forms through DeleteResource gRPC](#SupportdeletionoftheFormsthroughDeleteResourcegRPChttps:github.comcamundazeebeissues14272)
		* 5.1.26. [Keep track of event types in the Engine](#KeeptrackofeventtypesintheEnginehttps:github.comcamundazeebeissues13433)
		* 5.1.27. [Indicate the type of activated/completed/terminated catch events in Grafana](#IndicatethetypeofactivatedcompletedterminatedcatcheventsinGrafanahttps:github.comcamundazeebeissues13410)
		* 5.1.28. [Zeebe supports multi-tenancy for BPMN signal events](#Zeebesupportsmulti-tenancyforBPMNsignaleventshttps:github.comcamundazeebeissues13336)
		* 5.1.29. [I can execute a process with a compensation end event](#Icanexecuteaprocesswithacompensationendeventhttps:github.comcamundazeebeissues14967)
		* 5.1.30. [I can model a process with compensation events via BPMN model API](#IcanmodelaprocesswithcompensationeventsviaBPMNmodelAPIhttps:github.comcamundazeebeissues14939)
	* 5.2. [Zeebe > Misc > Bug Fixes](#ZeebeMiscBugFixes)
		* 5.2.1. [After cancellation, a completed change operation should not overwrite updated topology](#Aftercancellationacompletedchangeoperationshouldnotoverwriteupdatedtopologyhttps:github.comcamundazeebeissues15726)
		* 5.2.2. [Special characters in static inputs should not be escaped](#Specialcharactersinstaticinputsshouldnotbeescapedhttps:github.comcamundazeebeissues15447)
		* 5.2.3. [Verify correct behaviour of input mappings after bump to FEEL 1.17.3](#VerifycorrectbehaviourofinputmappingsafterbumptoFEEL1.17.3https:github.comcamundazeebeissues15445)
		* 5.2.4. [NullPointerException when join is retried after a restart](#NullPointerExceptionwhenjoinisretriedafterarestarthttps:github.comcamundazeebeissues15381)
		* 5.2.5. [IT timeout due to &#x60;ScaleResiliencyTest.ScaleDown&#x60;](#ITtimeoutduetox60ScaleResiliencyTest.ScaleDownx60https:github.comcamundazeebeissues15343)
		* 5.2.6. [Form events are not replayed](#Formeventsarenotreplayedhttps:github.comcamundazeebeissues15194)
		* 5.2.7. [Could not update new leader for partition](#Couldnotupdatenewleaderforpartitionhttps:github.comcamundazeebeissues15188)
		* 5.2.8. [Avoid executing process according to unprocessed commands referring to source process definition](#Avoidexecutingprocessaccordingtounprocessedcommandsreferringtosourceprocessdefinitionhttps:github.comcamundazeebeissues15129)
		* 5.2.9. [8.3.x release benchmark - Authorization data unavailable: The Token can&#x27;t be used before xxx](#8.3.xreleasebenchmark-Authorizationdataunavailable:TheTokencanx27tbeusedbeforexxxhttps:github.comcamundazeebeissues15047)
		* 5.2.10. [A deployed form is not mentioned in the &#x60;DeploymentEventImpl.toString()&#x60;](#Adeployedformisnotmentionedinthex60DeploymentEventImpl.toStringx60https:github.comcamundazeebeissues14931)
		* 5.2.11. [IOPS doubled in CW44](#IOPSdoubledinCW44https:github.comcamundazeebeissues14924)
		* 5.2.12. [Improve resilience of remote stream restart](#Improveresilienceofremotestreamrestarthttps:github.comcamundazeebeissues14884)
		* 5.2.13. [UDP resource leaks](#UDPresourceleakshttps:github.comcamundazeebeissues14837)
		* 5.2.14. [Leaked message subscriptions cause constant processing load](#Leakedmessagesubscriptionscauseconstantprocessingloadhttps:github.comcamundazeebeissues14814)
		* 5.2.15. [Job streams not aggregated correctly on gateway](#Jobstreamsnotaggregatedcorrectlyongatewayhttps:github.comcamundazeebeissues14773)
		* 5.2.16. [Job streams not registered on broker after some time](#Jobstreamsnotregisteredonbrokeraftersometimehttps:github.comcamundazeebeissues14771)
		* 5.2.17. [IllegalStateException: found snapshot 0. A previous snapshot is most likely corrupted](#IllegalStateException:foundsnapshot0.Aprevioussnapshotismostlikelycorruptedhttps:github.comcamundazeebeissues14699)
		* 5.2.18. [Regular OOM when replicating large state due to messaging timeouts](#RegularOOMwhenreplicatinglargestateduetomessagingtimeoutshttps:github.comcamundazeebeissues14663)
		* 5.2.19. [MsgpackReaderException when reading TenantId](#MsgpackReaderExceptionwhenreadingTenantIdhttps:github.comcamundazeebeissues14624)
		* 5.2.20. [NPE in &#x60;PendingMessageSubscriptionChecker&#x60;](#NPEinx60PendingMessageSubscriptionCheckerx60https:github.comcamundazeebeissues14588)
		* 5.2.21. [ NullPointerException: Cannot invoke &#x60;PartitionContext.getComponentHealthMonitor()&#x60; because &#x60;this.context&#x60; is null ](#NullPointerException:Cannotinvokex60PartitionContext.getComponentHealthMonitorx60becausex60this.contextx60isnullhttps:github.comcamundazeebeissues14458)
		* 5.2.22. [Snapshot version of  benchmark application (starter/worker) doesn&#x27;t work with SaaS](#Snapshotversionofbenchmarkapplicationstarterworkerdoesnx27tworkwithSaaShttps:github.comcamundazeebeissues14047)
		* 5.2.23. [Scheduled tasks should avoid overloading the streamprocessor](#Scheduledtasksshouldavoidoverloadingthestreamprocessorhttps:github.comcamundazeebeissues13870)
		* 5.2.24. [EvaluateDecision request returns double quoted string](#EvaluateDecisionrequestreturnsdoublequotedstringhttps:github.comcamundazeebeissues13551)
		* 5.2.25. [Inconsistent/unnecessary escaping of characters in inputs](#Inconsistentunnecessaryescapingofcharactersininputshttps:github.comcamundazeebeissues9859)
		* 5.2.26. [Feel error are causing bad user experiences](#Feelerrorarecausingbaduserexperienceshttps:github.comcamundazeebeissues8938)
		* 5.2.27. [Failed jobs are not reactivate after backoff](#Failedjobsarenotreactivateafterbackoffhttps:github.comcamundazeebeissues14329)
	* 5.3. [Zeebe > Misc > Documentation](#ZeebeMiscDocumentation)
		* 5.3.1. [Add missing steps to developer handbook](#Addmissingstepstodeveloperhandbookhttps:github.comcamundazeebeissues15287)
	* 5.4. [Zeebe > Misc > Merged Pull Requests](#ZeebeMiscMergedPullRequests)
		* 5.4.1. [build(topology): add backward compatibility check for protobuf messages](#buildtopology:addbackwardcompatibilitycheckforprotobufmessageshttps:github.comcamundazeebepull15744)
		* 5.4.2. [fix(topology): do not update the topology if the operation was cancelled](#fixtopology:donotupdatethetopologyiftheoperationwascancelledhttps:github.comcamundazeebepull15727)
		* 5.4.3. [fix(topology): maintain gossip state update ordering](#fixtopology:maintaingossipstateupdateorderinghttps:github.comcamundazeebepull15709)
		* 5.4.4. [deps(github-tags): Update actions/upload-artifact action to v4 (main)](#depsgithub-tags:Updateactionsupload-artifactactiontov4mainhttps:github.comcamundazeebepull15629)
		* 5.4.5. [fix(github): new project automation token for add-to-projects](#fixgithub:newprojectautomationtokenforadd-to-projectshttps:github.comcamundazeebepull15619)
		* 5.4.6. [Revert &quot;fix(github): use project admin token for project query&quot;](#Revertquotfixgithub:useprojectadmintokenforprojectqueryquothttps:github.comcamundazeebepull15618)
		* 5.4.7. [fix(github): fixed for add to projects workflow](#fixgithub:fixedforaddtoprojectsworkflowhttps:github.comcamundazeebepull15617)
		* 5.4.8. [Handle job worker back pressure/yield as an expected case](#Handlejobworkerbackpressureyieldasanexpectedcasehttps:github.comcamundazeebepull15508)
		* 5.4.9. [Fix the current ES dashboard](#FixthecurrentESdashboardhttps:github.comcamundazeebepull15390)
		* 5.4.10. [fix: set correct generation](#fix:setcorrectgenerationhttps:github.comcamundazeebepull15341)
		* 5.4.11. [Calculate the right versions](#Calculatetherightversionshttps:github.comcamundazeebepull15340)
		* 5.4.12. [refactor: allow easy disabling via secret removal](#refactor:alloweasydisablingviasecretremovalhttps:github.comcamundazeebepull15317)
		* 5.4.13. [Replay deployed forms](#Replaydeployedformshttps:github.comcamundazeebepull15201)
		* 5.4.14. [Aa update ci after 8.3 minor release](#Aaupdateciafter8.3minorreleasehttps:github.comcamundazeebepull14631)
		* 5.4.15. [fix(clients/go): client does not retry on permanent errors](#fixclientsgo:clientdoesnotretryonpermanenterrorshttps:github.comcamundazeebepull14217)
		* 5.4.16. [[Backport stable/1.2] Fixes flakiness with the ElasticsearchExporter integration tests](#Backportstable1.2FixesflakinesswiththeElasticsearchExporterintegrationtestshttps:github.comcamundazeebepull8203)
* 6. [Operate > Misc](#OperateMisc)
	* 6.1. [Operate > Misc > 💊 Bugfixes](#OperateMiscBugfixes)
		* 6.1.1. [fix(backend): Extract IndexLifecycleManagementIT. Get rid of ArchiverITRepository](#fixbackend:ExtractIndexLifecycleManagementIT.GetridofArchiverITRepositoryhttps:github.comcamundaoperateissues6083)
		* 6.1.2. [fix(backend): Remove unused items](#fixbackend:Removeunuseditemshttps:github.comcamundaoperateissues6078)
		* 6.1.3. [fix(backend): Configure number of shards per index #5920](#fixbackend:Configurenumberofshardsperindex5920https:github.comcamundaoperateissues6065)
		* 6.1.4. [fix(backend): Workaround for search_after issue in OS java client (#5788)](#fixbackend:Workaroundforsearch_afterissueinOSjavaclient5788https:github.comcamundaoperateissues6030)
* 7. [Identity > Misc](#IdentityMisc)
	* 7.1. [Identity > Misc > 🚀 New Features](#IdentityMiscNewFeatures)
		* 7.1.1. [feat: allow multiple root urls](#feat:allowmultiplerooturlshttps:github.comcamunda-cloudidentityissues2412)
		* 7.1.2. [feat: support custom client ids for camunda application](#feat:supportcustomclientidsforcamundaapplicationhttps:github.comcamunda-cloudidentityissues2406)
		* 7.1.3. [feat: add /ping endpoint for uptime check](#feat:addpingendpointforuptimecheckhttps:github.comcamunda-cloudidentityissues2380)
		* 7.1.4. [feat: provider helper in sdk for authorization available](#feat:providerhelperinsdkforauthorizationavailablehttps:github.comcamunda-cloudidentityissues2379)
		* 7.1.5. [feat: add a helper to determine identity user search availability](#feat:addahelpertodetermineidentityusersearchavailabilityhttps:github.comcamunda-cloudidentityissues2356)
		* 7.1.6. [feat: implement generic auth proile](#feat:implementgenericauthproilehttps:github.comcamunda-cloudidentityissues2327)
		* 7.1.7. [feat: expose user groups via SDK](#feat:exposeusergroupsviaSDKhttps:github.comcamunda-cloudidentityissues2303)
		* 7.1.8. [feat: add read:users permission to the Optimize role](#feat:addread:userspermissiontotheOptimizerolehttps:github.comcamunda-cloudidentityissues2296)
		* 7.1.9. [feat: implement Azure AD sdk profile](#feat:implementAzureADsdkprofilehttps:github.comcamunda-cloudidentityissues2273)
		* 7.1.10. [feat: add support for AWS Aurora database](#feat:addsupportforAWSAuroradatabasehttps:github.comcamunda-cloudidentityissues2266)
		* 7.1.11. [feat: implement identity spring boot starter](#feat:implementidentityspringbootstarterhttps:github.comcamunda-cloudidentityissues2184)
		* 7.1.12. [feat: add implementation info to SDK jar](#feat:addimplementationinfotoSDKjarhttps:github.comcamunda-cloudidentityissues2148)
		* 7.1.13. [feat: support initializing access rules by config](#feat:supportinitializingaccessrulesbyconfighttps:github.comcamunda-cloudidentityissues2161)
		* 7.1.14. [feat: implement GET /authorizations endpoint](#feat:implementGETauthorizationsendpointhttps:github.comcamunda-cloudidentityissues2109)
	* 7.2. [Identity > Misc > 💊 Bugfixes](#IdentityMiscBugfixes)
		* 7.2.1. [fix: fix resource authorizations checkbox style](#fix:fixresourceauthorizationscheckboxstylehttps:github.comcamunda-cloudidentityissues2343)
		* 7.2.2. [fix: upgrade org.springframework.boot:spring-boot-starter-security from 3.1.5 to 3.2.0](#fix:upgradeorg.springframework.boot:spring-boot-starter-securityfrom3.1.5to3.2.0https:github.comcamunda-cloudidentityissues2381)
		* 7.2.3. [fix: update aws-java-sdk-v2 monorepo to v2.21.29 (main)](#fix:updateaws-java-sdk-v2monorepotov2.21.29mainhttps:github.comcamunda-cloudidentityissues2353)
		* 7.2.4. [fix: update aws-java-sdk-v2 monorepo (main)](#fix:updateaws-java-sdk-v2monorepomainhttps:github.comcamunda-cloudidentityissues2350)
		* 7.2.5. [fix: upgrade software.amazon.awssdk:rds from 2.21.21 to 2.21.26](#fix:upgradesoftware.amazon.awssdk:rdsfrom2.21.21to2.21.26https:github.comcamunda-cloudidentityissues2332)
		* 7.2.6. [fix: update aws-java-sdk-v2 monorepo to v2.21.21 (main)](#fix:updateaws-java-sdk-v2monorepotov2.21.21mainhttps:github.comcamunda-cloudidentityissues2312)
		* 7.2.7. [fix: update aws-java-sdk-v2 monorepo to v2.21.20 (main)](#fix:updateaws-java-sdk-v2monorepotov2.21.20mainhttps:github.comcamunda-cloudidentityissues2307)
		* 7.2.8. [fix: update aws-java-sdk-v2 monorepo to v2.21.17 (main)](#fix:updateaws-java-sdk-v2monorepotov2.21.17mainhttps:github.comcamunda-cloudidentityissues2300)
		* 7.2.9. [fix: update c4-identity to fix multiple tenants assignment](#fix:updatec4-identitytofixmultipletenantsassignmenthttps:github.comcamunda-cloudidentityissues2213)
		* 7.2.10. [fix: upgrade software.amazon.awssdk:rds from 2.21.13 to 2.21.15](#fix:upgradesoftware.amazon.awssdk:rdsfrom2.21.13to2.21.15https:github.comcamunda-cloudidentityissues2274)
		* 7.2.11. [fix: dependency issues causing tests to not run](#fix:dependencyissuescausingteststonotrunhttps:github.comcamunda-cloudidentityissues2268)
		* 7.2.12. [fix: fix access rules retrieval](#fix:fixaccessrulesretrievalhttps:github.comcamunda-cloudidentityissues2265)
		* 7.2.13. [fix: update spring boot to v3.1.5 (main)](#fix:updatespringboottov3.1.5mainhttps:github.comcamunda-cloudidentityissues2227)
		* 7.2.14. [fix: use java 17 to build new artifacts](#fix:usejava17tobuildnewartifactshttps:github.comcamunda-cloudidentityissues2225)
		* 7.2.15. [fix: upgrade org.springframework.boot:spring-boot-starter-web from 3.1.4 to 3.1.5](#fix:upgradeorg.springframework.boot:spring-boot-starter-webfrom3.1.4to3.1.5https:github.comcamunda-cloudidentityissues2191)
		* 7.2.16. [fix: resolve lazy loading issue with tenants linked to access rules](#fix:resolvelazyloadingissuewithtenantslinkedtoaccessruleshttps:github.comcamunda-cloudidentityissues2180)
		* 7.2.17. [fix: fix for 2 vulnerabilities](#fix:fixfor2vulnerabilitieshttps:github.comcamunda-cloudidentityissues2133)
		* 7.2.18. [fix: only create log file when required](#fix:onlycreatelogfilewhenrequiredhttps:github.comcamunda-cloudidentityissues2164)
		* 7.2.19. [fix: prevent body on GET call in serviceWorker](#fix:preventbodyonGETcallinserviceWorkerhttps:github.comcamunda-cloudidentityissues2153)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Zeebe
##  1. <a name='ZeebeBroker'></a>Zeebe > Broker
###  1.1. <a name='ZeebeBrokerEnhancements'></a>Zeebe > Broker > Enhancements
####  1.1.1. <a name='SupportIndexStateManagementinOpenSearchexporterhttps:github.comcamundazeebeissues13203'></a>[Support Index State Management in OpenSearch exporter](https://github.com/camunda/zeebe/issues/13203)

Previously, users were unable to manage index lifecycles with Index State Management (ISM) in the OpenSearch Exporter. The need for manual index management through the OpenSearch UI was an inconvenience and an additional task for users. 
The lack of ISM support in our OpenSearch Exporter was due to the absence of the necessary configuration code.
Support for ISM has been added to the OpenSearch Exporter in a manner similar to ILM, compatible with OpenSearch versions 1.3.x and 2.8.x. Furthermore, we have documented this feature in the OpenSearch Exporter docs to assist users in the configuration process.
Now, users can conveniently configure the management of index lifecycles using ISM right from the OpenSearch Exporter. This upgrade eliminates the need for manual index management and aligns the OpenSearch Exporter with the Elasticsearch Exporter in terms of features.
###  1.2. <a name='ZeebeBrokerBugFixes'></a>Zeebe > Broker > Bug Fixes
####  1.2.1. <a name='Failedorcancelledtopologychangeoperationsblockfurtheroperationshttps:github.comcamundazeebeissues15220'></a>[Failed or cancelled topology change operations block further operations](https://github.com/camunda/zeebe/issues/15220)

Previously, any failed or cancelled topology change operations blocked subsequent operations. ClusterTopologyManager failed to clear the flag which signaled an ongoing topology change operation when a change was cancelled or an operation failed to initialize.
The issue was caused because the &#x27;onGoingTopologyChangeOperation&#x27; flag in the ClusterTopologyManager was only reset (set to &#x27;false&#x27;) when an operation was successful. If an operation was cancelled or failed to initialize, this flag wasn&#x27;t appropriately reset, thus blocking subsequent operations.
We adjusted the &#x27;ClusterTopologyManager&#x27; so that the &#x27;onGoingTopologyChangeOperation&#x27; is set to &#x27;false&#x27; not only when an operation is successful, but also after an operation fails or is cancelled.
Now, even in the event of failed or cancelled topology change operations, subsequent operations can be initiated without being blocked. The system handles operations more efficiently, providing a smoother user experience.
####  1.2.2. <a name='Topologyreceivedviagossipcanbypassmergewithlocallypersistedtopologyhttps:github.comcamundazeebeissues15219'></a>[Topology received via gossip can bypass merge with locally persisted topology](https://github.com/camunda/zeebe/issues/15219)

Previously, brokers had an issue where they might forget about already applied operations. This was due to the new topology received over gossip before the &#x60;TopologyInitializer&#x60; had finished its process, subsequently bypassing the merge with the locally persisted topology.
Technically, this occurred because the local topology was uninitialized at the time the new topology was received. This led to the new topology being preserved without merging with the local one.
The issue was resolved by ensuring that topology updates received via gossip do not overwrite an uninitialized topology. The only exception was made for the &#x60;GossipInitializer&#x60;.
Brokers now recall already applied operations accurately. Topology updates received over gossip will not overwrite an uninitialized topology, with the previously stated exception applying. This ensures the accurate preservation and merging of both new and local topologies.
####  1.2.3. <a name='Potentialinconsistencyinraftafterrestoringfromabackuphttps:github.comcamundazeebeissues14509'></a>[Potential inconsistency in raft after restoring from a backup](https://github.com/camunda/zeebe/issues/14509)

  
After restoring Zeebe brokers from backup, some partitions encountered an error that could lead to potential inconsistency. This problem was caused by a misalignment in the log index which failed to delete a certain number of older operations. This problem resulted in your Zeebe cluster either being safe to restart if there is no new data written, or a partial data loss if new user requests have been processed. High disk usage was also observed due to logs not being compacted.
  
The issue occurred because, after restoring from the backup, the raft metastore - a component of the Zeebe broker which stores crucial data required for the raft consensus algorithm, including the current term and voted candidate - was empty, leading to an incorrect restart of the term from 1. This caused an illegal state exception and resulted in the cluster going into an inconsistent state where new data could not be written if the inconsistency occurs after restore, or potential loss of newly written data.
  
Made modifications using the approved changes in [PR #15272](https://github.com/camunda/zeebe/pull/15272). The changes include adjusting the state of the raft metastore, ensuring the correct term is used after restoration from backup, safeguarding from deletions that can lead to inconsistencies.
  
Following the fix, after restoring from a backup, there is no inconsistency found and the raft continues to work in all scenarios. There is no potential for data loss irrespective of whether new data is written or not. The logs are also compacted regularly, avoiding high disk usage.
####  1.2.4. <a name='Deletingaprocessdefinitiononlychecksrunninginstancesanddoesnx27tignorebannedinstanceshttps:github.comcamundazeebeissues14465'></a>[Deleting a process definition only checks running instances and doesn&#x27;t ignore banned instances](https://github.com/camunda/zeebe/issues/14465)

 Users were previously unable to delete a process definition if there was a banned instance associated with it. Additionally, if the definition was deleted and the command was sent to a partition with a banned instance, the command would keep retrying indefinitely, causing state inconsistency.
 The issue occurred because the check for running instances during the deletion of a process definition did not account for banned instances. This gap in the check meant that definitions with banned instances were always rejected. Furthermore, this check was only carried out on the partition that received the command, leading to possible discrepancies between partitions.
 The check for running instances during deletion of a process definition has been updated to exclude banned instances. The check has also been improved to consider all partitions, ensuring consistent behaviour across different partitions.
 Users can now delete a process definition even when there are banned instances. Moreover, the deletion command will not continuously retry on a partition with banned instances, ensuring that users can consistently start new instances across all partitions.
####  1.2.5. <a name='Staticusertaskassigneevaluetreatedasnumberleadstoanexceptionhttps:github.comcamundazeebeissues14109'></a>[Static user task assignee value treated as number (leads to an exception)](https://github.com/camunda/zeebe/issues/14109)

Users encountered an exception when setting a user task assignee to a static number value. This resulted in improper activation of the user task.
The issue was rooted in the system interpreting a static number value as an actual &#x27;NUMBER&#x27; data type, instead of treating it as a &#x27;STRING&#x27; as expected, leading to a &#x27;NUMBER&#x27; type exception.
This issue was fixed by ensuring that static number values are treated as string values by the system, not as number literals. This was achieved by enhancing the system&#x27;s interpretation mechanism.
With this fix, users can now set user task assignees to static number values without encountering any exceptions. The system appropriately treats these static number values as &#x27;STRING&#x27; data types, ensuring successful activation of user tasks.
##  2. <a name='ZeebeGateway'></a>Zeebe > Gateway
###  2.1. <a name='ZeebeGatewayEnhancements'></a>Zeebe > Gateway > Enhancements
####  2.1.1. <a name='Gatewaysupportsmulti-tenancyinsignalbroadcastRPCshttps:github.comcamundazeebeissues14277'></a>[Gateway supports multi-tenancy in signal broadcast RPCs](https://github.com/camunda/zeebe/issues/14277)

 Previously, the Zeebe Gateway could not handle tenant-aware &#x60;BroadcastSignal&#x60; RPC calls, preventing multi-tenancy in signal broadcasts.
 This was due to the lack of a &#x60;tenantId&#x60; property in &#x60;BroadcastSignal&#x60; RPC requests, responses and signal-related records.
 To address this, we updated &#x60;BroadcastSignal&#x60; requests and responses to contain a &#x60;tenantId&#x60; property. We also included a &#x60;tenantId&#x60; property into signal-related records and added validation for correct &#x60;tenantId&#x60; in &#x60;BroadcastSignal&#x60; requests.
 Now, the Zeebe Gateway properly supports handling tenant-aware &#x60;BroadcastSignal&#x60; RPC calls, enabling multi-tenancy in signal broadcast RPCs.
###  2.2. <a name='ZeebeGatewayBugFixes'></a>Zeebe > Gateway > Bug Fixes
####  2.2.1. <a name='Interceptororderisnotrespectedhttps:github.comcamundazeebeissues15677'></a>[Interceptor order is not respected](https://github.com/camunda/zeebe/issues/15677)

 
Users experienced mismatched gRPC interceptor calls, as the order was not always consistent with the configuration settings.
 
The underlying issue was a disregard for the specific order in which interceptors were added to the configuration within the &#x60;IdentityRepository&#x60;.
 
The &#x60;IdentityRepository&#x60; was refactored to ensure the interceptors are initiated in the same order as they have been added in the configuration.
 
Users will now observe that gRPC interceptors are consistently called in the precise order as they are added in the configuration, as per the user&#x27;s preference.

##  3. <a name='ZeebeJavaClient'></a>Zeebe > Java Client
###  3.1. <a name='ZeebeJavaClientEnhancements'></a>Zeebe > Java Client > Enhancements
####  3.1.1. <a name='ProvidetheJavaclientx27sinterfacesformigratingaprocessinstancehttps:github.comcamundazeebeissues15161'></a>[Provide the Java client&#x27;s interfaces for migrating a process instance](https://github.com/camunda/zeebe/issues/15161)

Users of the Java client were unable to migrate process instances through the API. 
In the past, the interfaces required for migrating a process instance had not been made available for Java client users. 
The interfaces of the Java client were provided. However, the full implementation was not done to unblock Operate early. 
Users can now start development against these interfaces with the Java client, assisting in the migration of process instances.
####  3.1.2. <a name='SupportmigratingaprocessinstancefromtheJavaclienthttps:github.comcamundazeebeissues14921'></a>[Support migrating a process instance from the Java client](https://github.com/camunda/zeebe/issues/14921)

Users were unable to migrate process instances via the Java client&#x27;s API. The logic behind the migration of several process instances, using a reusable migration plan, was inefficiently administered.
The Java client lacked a proper implementation of interfaces for managing the migration of a process instance.
Implemented the necessary interfaces in the Java client for managing the migration of process instances. This made it easier to reuse a migration plan multiple times to handle several processes.
Users can now efficiently migrate process instances using the Java client&#x27;s API. By reusing a migration plan, several process instances can be managed in a more streamlined manner. The system is no longer blocked from performing such processes.
####  3.1.3. <a name='Javaclientsupportsmulti-tenancyforBroadcastSignalRPChttps:github.comcamundazeebeissues13558'></a>[Java client supports multi-tenancy for BroadcastSignal RPC](https://github.com/camunda/zeebe/issues/13558)

 
The Java client could not support multi-tenancy while broadcasting tenant-aware signals in Zeebe. Attempting to broadcast a signal of a tenant without required authorization or providing invalid/missing tenant id led to PERMISSION_DENIED or INVALID_ARGUMENT errors.
 
There was no optional &#x60;tenantId&#x60; property/method in &#x60;BroadcastSignalCommand&#x60; to support multi-tenancy during broadcasting of signals. 
 
The Java client now exposes an optional &#x60;tenantId&#x60; property/method in &#x60;BroadcastSignalCommand&#x60; to allow multi-tenancy support. The system&#x27;s ability to recognize and appropriately respond to situations such as unauthorized access or improper arguments has been improved.
 
In the updated system, when attempting to broadcast a signal of a tenant using the Java client, users will need to provide a proper &#x60;tenantId&#x60;. Upon correct authorization and tenant id, multi-tenancy will be supported seamlessly. Incorrect access or arguments will still result in PERMISSION_DENIED or INVALID_ARGUMENT errors, maintaining system security and integrity.
###  3.2. <a name='ZeebeJavaClientBugFixes'></a>Zeebe > Java Client > Bug Fixes
####  3.2.1. <a name='ActivateJobsCommandImplthrowsNullPointerExceptionwhenZeebeClientProperties.getDefaultJobWorkerNameisnullhttps:github.comcamundazeebeissues14176'></a>[ActivateJobsCommandImpl throws NullPointerException when ZeebeClientProperties.getDefaultJobWorkerName is null](https://github.com/camunda/zeebe/issues/14176)

 Users encountered a &#x60;NullPointerException&#x60; when trying to implement the &#x60;ZeebeClientProperties&#x60; and returning &#x60;null&#x60; for the &#x60;getDefaultJobWorkerName&#x60;.
 This issue arose because the &#x60;ActivateJobsCommandImpl&#x60; constructor attempted to set the &#x60;workerName&#x60; during construction and anticipated the &#x60;config.getDefaultJobWorkerName()&#x60; to be non-null. Null values were not supported by the underlying builder, causing a &#x60;NullPointerException&#x60;.
 The software was adjusted to ensure that the builder falls back to the default worker name only if it hasn&#x27;t been set by a client while constructing the final command.
 Now, even if the Zeebe Client Properties returns &#x60;null&#x60; for the &#x60;getDefaultJobWorkerName&#x60;, the service continues to function without throwing a &#x60;NullPointerException&#x60;. The builder will use the default worker name when none is set by the client during construction of the final command. This results in a more robust system with improved error handling.
##  4. <a name='ZeebeGoClient'></a>Zeebe > Go Client
###  4.1. <a name='ZeebeGoClientEnhancements'></a>Zeebe > Go Client > Enhancements
####  4.1.1. <a name='Goclientcommandsallowspecifyingax60tenantIdx60x60tenantIdsx60propertyhttps:github.comcamundazeebeissues15153'></a>[Go client commands allow specifying a &#x60;tenantId&#x60; / &#x60;tenantIds&#x60; property](https://github.com/camunda/zeebe/issues/15153)

Prior to this bug fix, users of the Zeebe Go client were unable to specify &#x60;tenantId&#x60; and &#x60;tenantIds&#x60; when executing key commands, therefore it did not support multi-tenancy.
This was due to the omission of methods to set a &#x60;tenantId&#x60; in the &#x60;DeployResource&#x60;, &#x60;CreateProcessInstance&#x60;, &#x60;PublishMessage&#x60;, &#x60;BroadcastSignal&#x60;, &#x60;EvaluateDecision&#x60; commands, and &#x60;tenantIds&#x60; in the &#x60;ActivateJobs&#x60; command in the Zeebe Go client.
Methods for setting &#x60;tenantId&#x60; were added to the &#x60;DeployResource&#x60;, &#x60;CreateProcessInstance&#x60;, &#x60;PublishMessage&#x60;, &#x60;BroadcastSignal&#x60;, &#x60;EvaluateDecision&#x60; commands, and &#x60;tenantIds&#x60; to the &#x60;ActivateJobs&#x60; command of the Zeebe Go client.
Now, the Zeebe Go client allows users to specify &#x60;tenantId&#x60; and &#x60;tenantIds&#x60;, hence supporting multi-tenancy. Those commands can now be utilized in multi-tenant settings, allowing for better convenience and improved functionalities.
####  4.1.2. <a name='Addmulti-tenancysupportintheZeebeGoclienthttps:github.comcamundazeebeissues14477'></a>[Add multi-tenancy support in the Zeebe Go client](https://github.com/camunda/zeebe/issues/14477)

Users of the Zeebe Go client were unable to utilize multi-tenancy, restricting their ability to separate, isolate and secure different tenant environments.
The Zeebe Go client did not historically include multi-tenancy support in its architecture, resulting in limited functionality when managing multiple tenants.
The issue was slated for attention and underwent investigation, resulting in multiple sub-tasks needed to support multi-tenancy. However, the issue was de-prioritized and not resolved in this update.
At the moment, the Zeebe Go client still does not offer multi-tenancy support as the feature has been de-prioritized. The solution timeline for this feature is currently unclear.
####  4.1.3. <a name='go-client:Jobworkerpollingbackoffmechanismhttps:github.comcamundazeebeissues6150'></a>[go-client: Job worker polling backoff mechanism](https://github.com/camunda/zeebe/issues/6150)

 Previously, errors received from the gateway by the job poller in the Go client did not trigger a delay for the next poll for available jobs, potentially causing inefficient use of resources.
 The Go client lacked a backoff mechanism to delay the next job poll following a gateway error, unlike its Java counterpart.
 A backoff mechanism was implemented for the Go client&#x27;s job worker, mirroring the functionality of the Java client&#x27;s backoff process. This includes a default exponential backoff mechanism with configurable settings, and the option for users to apply their own backoff strategy.
 Now, when there&#x27;s an error received on the poll for available jobs, the Go client&#x27;s job worker applies the backoff mechanism, efficiently managing resources. The added customization options also give users greater control over error handling.
##  5. <a name='ZeebeMisc'></a>Zeebe > Misc
###  5.1. <a name='ZeebeMiscEnhancements'></a>Zeebe > Misc > Enhancements
####  5.1.1. <a name='Processinstancemigrationsupportsmulti-tenancyhttps:github.comcamundazeebeissues15675'></a>[Process instance migration supports multi-tenancy](https://github.com/camunda/zeebe/issues/15675)

Process instance migration failed to support multi-tenancy, causing commands unauthorized for specific tenants to be improperly processed.
The system was not able to discern commands appropriate for the tenant that owned the process instance intended for migration, thus allowing unauthorized commands to pass through.  
The function for process instance migration was updated to verify each command&#x27;s authorization before allowing migration. 
Now, the system correctly rejects any command that is not authorized to work with the tenant that owns the intended process instance. This improves the reliability of the process instance migration for multitenant environments.
####  5.1.2. <a name='Revert:Migratetaskinstanceswithrecreatedeventsubscriptionshttps:github.comcamundazeebeissues15659'></a>[Revert: Migrate task instances with recreated event subscriptions](https://github.com/camunda/zeebe/issues/15659)

Users experienced trouble with process instance migrations due to unsuccessful recreation of event subscriptions. This malfunction was observed after the implementation of Migrate task instances (#15407). 
This was because the underlying logic in #15407 did not properly account for the resetting of timers during a migration, leading to malfunctioning event subscriptions.
A decision was made to revert the changes introduced by #15407 to alleviate the problem. This was the best immediate solution, as it was not possible to implement a quick fix for the bug until the minor release.
With the reversal of changes, the process instance migrations are now operating as expected without any issues related to event subscriptions. Users are able to smoothly navigate through the application without encountering the previously faced trouble.
####  5.1.3. <a name='SyncProcessInstanceMigrationgRPCdocumentationwithgateway.protohttps:github.comcamundazeebeissues15568'></a>[Sync Process Instance Migration gRPC documentation with gateway.proto](https://github.com/camunda/zeebe/issues/15568)

In the past, users encountered confusion and inconsistencies because the response codes and their explanations were not in sync between our Camunda 8 gRPC API documentation and the &#x27;gateway.proto&#x27; file.
The discrepancy occurred due to some updates and modifications that were implemented in the &#x27;gateway.proto&#x27; file, but these changes did not reflect in the gRPC documentation in a timely manner.
We have now updated and synchronized the gRPC documentation with the &#x27;gateway.proto&#x27; file. We made certain that the error code explanations in both resources are identical and consistent.
Currently, users can expect a consistent and unified view of the response codes and their explanations across our Camunda 8 gRPC API documentation and the &#x27;gateway.proto&#x27; file. This synchronization will enhance the user experience by removing any discrepancies and potential confusion.

####  5.1.4. <a name='Migratetaskinstanceswithrecreatedeventsubscriptionshttps:github.comcamundazeebeissues15407'></a>[Migrate task instances with recreated event subscriptions](https://github.com/camunda/zeebe/issues/15407)

Previously, during the migration of a process instance, issues arose when there existed event subscriptions in the process instance or events in the target process that needed to be subscribed to. This complexity was due to the fact that event subscriptions existed on other partitions than the process instance, particularly message subscriptions.
The problem was due to the structure of the system where event subscriptions could exist on partitions separate from the process instance, making migration of these instances complicated.
The engineering team addressed this by implementing a mechanism to unsubscribe each active element instance in the process instance and concurrently subscribing to new events in the target process for each migrated element instance.
Now, the migration process is smoother with an efficient way of dealing with existing event subscriptions. Event subscriptions can properly migrate alongside their respective process instances, meaning users will experience fewer migration-related issues.
####  5.1.5. <a name='Allowsettingx60scopex60parameterforOAuth2authenticationhttps:github.comcamundazeebeissues15391'></a>[Allow setting &#x60;scope&#x60; parameter for OAuth2 authentication](https://github.com/camunda/zeebe/issues/15391)

 Previously, users were not able to set the &#x60;scope&#x60; parameter for OAuth2 authentication when using the Zeebe java client. This prevented support for authentication via Microsoft Entra ID (Azure AD) and generic OpenID Connect which required this parameter.
 The limitation was due to the absence of a feature in the Zeebe client for setting the &#x60;scope&#x60; parameter in the token request, a necessary specification particularly for OAuth2 authentication involving Microsoft Entra ID among others.
 A provision has been added in the Zeebe java client to support the setting of the &#x60;scope&#x60; parameter in the token request. This involved integrating support for environment variable configuration.
 Now, the &#x60;scope&#x60; parameter can be set in the Zeebe java client, which enables successful OAuth2 authentication for Microsoft Entra ID (Azure AD) and generic OpenID Connect. Users can now specify this &#x60;scope&#x60; parameter based on their specific authentication requirements.
####  5.1.6. <a name='Configurex60identity-sdkx60throughx60identity-spring-boot-starterx60intheGatewayhttps:github.comcamundazeebeissues15389'></a>[Configure &#x60;identity-sdk&#x60; through &#x60;identity-spring-boot-starter&#x60; in the Gateway](https://github.com/camunda/zeebe/issues/15389)

 Previously, any update to the Identity configuration had to be manually added to Zeebe&#x27;s configuration classes, creating a dependence of Zeebe on Identity properties.
 This issue arose due to Zeebe&#x27;s inability to integrate the &#x60;identity-spring-boot-starter&#x60; and dynamically adapt to changes in the Identity configuration properties.
 Adjustments were made to the &#x60;IdentityInterceptor&#x60;, &#x60;Gateway&#x60;, &#x60;StandaloneGateway&#x60;, and &#x60;EmbeddedGatewayService&#x60; classes. They now create an &#x60;Identity&#x60; instance using an &#x60;IdentityConfiguration&#x60; instance, which is passed as a parameter to the constructors of these classes. The &#x60;StandaloneBroker&#x60; class now also passes the &#x60;IdentityConfiguration&#x60; bean, which allows for automatic configuration of Identity properties.
 Zeebe can now integrate the &#x60;identity-spring-boot-starter&#x60; and dynamically adapt to changes in the Identity configuration properties. This decouples it from manual updates every time a new Identity configuration property is added.
####  5.1.7. <a name='Addintegrationtesttox60MultiTenancyOverIdentityITx60testhttps:github.comcamundazeebeissues15382'></a>[Add integration test to &#x60;MultiTenancyOverIdentityIT&#x60; test](https://github.com/camunda/zeebe/issues/15382)

Previously, users could experience inconsistent behaviour while using the &#x60;MultiTenancyOverIdentityIT&#x60; test because it lacked necessary integration tests.
This was due to the absence of exhaustive IT tests in the &#x60;MultiTenancyOverIdentityIT&#x60; class.
Comprehensive integration tests were added to the &#x60;MultiTenancyOverIdentityIT&#x60; test, using &#x60;shouldCompleteJobForTenant&#x60; as an example.
Now when using the &#x60;MultiTenancyOverIdentityIT&#x60; test, users can expect consistent and reliable results due to the improved integration testing.
####  5.1.8. <a name='Supportx60UpdateJobTimeoutx60RPCinGoClienthttps:github.comcamundazeebeissues15366'></a>[Support &#x60;UpdateJobTimeout&#x60; RPC in Go Client](https://github.com/camunda/zeebe/issues/15366)

Previously, the Go Client did not support the &#x60;UpdateJobTimeout&#x60; RPC function, limiting its capabilities.
This issue arose because the Go Client was initially designed without including the Job Update Timeout command, similar to the Job Update Retries command.
The &#x60;UpdateJobTimeout&#x60; RPC was incorporated into the Go Client&#x27;s functionalities.
Now, users can successfully use the &#x60;UpdateJobTimeout&#x60; RPC in the Go Client, enhancing its operational scope and effectiveness.
####  5.1.9. <a name='SupportElasticSearch8.9https:github.comcamundazeebeissues15306'></a>[Support ElasticSearch 8.9+](https://github.com/camunda/zeebe/issues/15306)

 Users experiencing bugs and common vulnerabilities and exposures (CVEs) were compelled to upgrade their ElasticSearch instances to 8.9.
 The ElasticSearch dependencies in Zeebe were not initially upgraded to support 8.9+ even though frequent minor updates from ElasticSearch typically provide necessary bug-fixes.
 The update was implemented by manually updating the ElasticSearch dependencies in Zeebe to version 8.9+. In addition, the dependency in zeebe-analytics was also updated to support this.
 The system is now aligned with the upgraded ElasticSearch version 8.9+, subsequently helping users to address bugs and CVEs in the updated ElasticSearch instances.
####  5.1.10. <a name='Updatex60broker.yaml.templatex60andx60broker.standalone.yaml.templatex60filesinordertoallowusertodisableformexportinghttps:github.comcamundazeebeissues15193'></a>[Update &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files in order to allow user to disable form exporting](https://github.com/camunda/zeebe/issues/15193)

Users were previously unable to disable form exporting as there was no option provided in the &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files.
The provision to disable form exporting had not been incorporated into the &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files. 
The &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files were updated to include an option that allows users to disable form exporting.
Users are now able to disable form exporting by modifying the option in the &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files.
####  5.1.11. <a name='Exportcompensationsubscriptioneventshttps:github.comcamundazeebeissues15140'></a>[Export compensation subscription events](https://github.com/camunda/zeebe/issues/15140)

Previously, compensation record for BPMN compensation events were not exported to Elasticsearch and OpenSearch.
This omission occurred due to lack of implementation in the data export phase of the Zeebe engine.
We addressed this by following our development guide, making necessary changes to support record values in the Elasticsearch exporter as suggested by pull request [#15392](https://github.com/camunda/zeebe/pull/15392).
Now, the system correctly exports BPMN compensation event records to both Elasticsearch and OpenSearch.
####  5.1.12. <a name='Migratetaskinstanceswithvariableshttps:github.comcamundazeebeissues15114'></a>[Migrate task instances with variables](https://github.com/camunda/zeebe/issues/15114)

 Previously, users were unable to migrate task instances that contained variables. This limitation hindered process flexibility and adaptability.
 This issue was a result of the system not having a &#x60;VariableIntent&#x60; &#x60;MIGRATED&#x60; functionality. There was neither a process to update variable properties (&#x60;bpmnProcessId&#x60;, &#x60;processDefinitionVersion&#x60;, &#x60;processDefinitionKey&#x60;), nor a command processor to apply these changes to all variable instances in a process.
 A new &#x60;VariableIntent&#x60; called &#x60;MIGRATED&#x60; was introduced to assist in the migration of variables associated with task instances. An event applier was added to update crucial variable properties such as &#x60;bpmnProcessId&#x60;, &#x60;processDefinitionVersion&#x60;, and &#x60;processDefinitionKey&#x60;. Furthermore, the &#x60;ProcessInstanceMigration&#x60; command processor was amended to append a &#x60;Variable:MIGRATED&#x60; event for each variable and child element instance of the process. Care was taken to clear the variable&#x27;s &#x60;value&#x60; when appending the event to avoid exceeding the result records batch size.
 Now, users can migrate task instances with variables. Variables remain in their original scope, ensuring continuity of process functionality. This update has improved the flexibility of the process instance, allowing for variable use in activated jobs and updates through Set Variables RPC.
####  5.1.13. <a name='Migrateservicetaskinstancesincludingjobshttps:github.comcamundazeebeissues15113'></a>[Migrate service task instances (including jobs)](https://github.com/camunda/zeebe/issues/15113)

 Users were not able to migrate service task instances, including jobs, from one process definition to another. This limitation hindered the flexibility and dynamism of process management.
 The system lacked the necessary mechanism to modify service task properties during migration, and no &#x60;JobIntent&#x60; was available to signify a job migration. The &#x60;ProcessInstanceMigration&#x60; command processor was not set up to handle service type &#x60;SERVICE_TASK&#x60;, which left the job&#x27;s events unprocessed during migration.
 A new &#x60;JobIntent&#x60; named &#x60;MIGRATED&#x60; was introduced. An event applier was added to update the job properties, including &#x60;bpmnProcessId&#x60;, &#x60;processDefinitionVersion&#x60;, &#x60;processDefinitionKey&#x60;, and &#x60;elementId&#x60; during migration. Furthermore, the &#x60;ProcessInstanceMigration&#x60; command processor was updated to append &#x60;ProcessInstance:ELEMENT_MIGRATED&#x60; event for each child instance and a &#x60;Job:MIGRATED&#x60; event if the child is a service task.
 Users can now successfully migrate service task instances, including jobs, from one process definition to another. All job commands remain functional post-migration ensuring seamless process management.
####  5.1.14. <a name='Introducenewcompensationsubscriptionrecordhttps:github.comcamundazeebeissues15063'></a>[Introduce new compensation subscription record](https://github.com/camunda/zeebe/issues/15063)

 
Previously, there was no way to track compensation events within processed activities. This impacted the functionality as it became hard to find completed activities with compensation handlers and track the state of these handlers.
 
This limitation was due to the absence of a dedicated record for compensation events. This could store essential data like tenant id, process instance key, process definition key, element ids, compensation throw event details, and local variables involved with the compensation handler.
 
A new record for compensation events was added. The lifecycle states (CREATED, TRIGGERED, COMPLETED, DELETED) for this record were introduced, each state change triggering an update to the subscription in the state.
 
Now users can track compensation handlers&#x27; progress and identify the resources involved effortlessly. Hence it enhances the clarity and manageability of completed activities involving compensation events, providing a more transparent view to the end user.
####  5.1.15. <a name='AddJobUpdateTimeoutintentshttps:github.comcamundazeebeissues15034'></a>[Add Job Update Timeout intents](https://github.com/camunda/zeebe/issues/15034)

Consequence:
Previously, if no deadline was found for a job in its state or the job itself was not found in the state, the system would return a &#x60;NOT_FOUND&#x60; rejection. 
Cause:
The issue stemmed from the &#x60;JobIntent&#x60; class not having an &#x60;UPDATE_TIMEOUT&#x60; command to check the state for the job and its deadline. Additionally, &#x60;JOB_DEADLINES&#x60; ColumnFamily, keyed by the deadline-jockey, could not be updated directly and had no access to the old deadline information.
Two new intents were added to the &#x60;JobIntent&#x60; class: &#x60;UPDATE_TIMEOUT&#x60; and &#x60;TIMEOUT_UPDATED&#x60;. The &#x60;UPDATE_TIMEOUT&#x60; command finds the job in the state and checks its deadline. The &#x60;TIMEOUT_UPDATED&#x60; event updates the &#x60;JOB_DEADLINES&#x60; ColumnFamily by removing the existing job entry and inserting a new one simultaneously. This was facilitated by retrieving old deadline data stored in the state through the JobRecord.
Currently, if a job or its deadline can&#x27;t be found in the state, the &#x60;UPDATE_TIMEOUT&#x60; intent issues a &#x60;NOT_FOUND&#x60; rejection. The &#x60;TIMEOUT_UPDATED&#x60; intent successfully modifies the deadline in the state, effectively updating the &#x60;JOB_DEADLINES&#x60; ColumnFamily.
####  5.1.16. <a name='Icanexecuteaprocesswithanintermediatecompensationthroweventhttps:github.comcamundazeebeissues14965'></a>[I can execute a process with an intermediate compensation throw event](https://github.com/camunda/zeebe/issues/14965)

 Previously, users could deploy a process with a compensation intermediate throw event but were unable to execute this process. The records for the compensation intermediate throw event did not have the correct event type.
 The system was not handling the invocation of compensation handlers correctly, preventing the completion of a process instance that contained a compensation intermediate throw event.
 We implemented a fix that enables the correct activation and completion of the compensation intermediate throw event. We have also ensured that the records for the compensation intermediate throw event now have the event type &#x60;COMPENSATION&#x60;. 
 Users can now fully execute a process that includes a compensation intermediate throw event. The compensation intermediate throw event is both activated and completed successfully, with the correct event type set in the records.
####  5.1.17. <a name='Therecordforacompensationeventhasthecorrecteventtypehttps:github.comcamundazeebeissues14944'></a>[The record for a compensation event has the correct event type](https://github.com/camunda/zeebe/issues/14944)

 Previously, when executing a BPMN process, the recording of compensation events might have been ambiguous or omitted due to a missing event type &#x27;COMPENSATION&#x27; for process instance value type events. 
 This situation was created because the BPMN system didn&#x27;t have a dedicated &#x27;COMPENSATION&#x27; type for its bpmnEventType field, causing the compensation events to be inaccurately or not categorized.
 A new event type &#x27;COMPENSATION&#x27; has been introduced and applied to all related BPMN compensation events (including but not limited to compensation intermediate throwing events, compensation end events, compensation boundary events, and compensation start events). 
 Now, all events related to BPMN compensation event have the appropriate &#x27;COMPENSATION&#x27; event type. Users can now accurately track compensation events, leading to more precise process execution monitoring in BPMN workflows.

####  5.1.18. <a name='IcandeployaprocesswithBPMNcompensationeventsubprocesseshttps:github.comcamundazeebeissues14943'></a>[I can deploy a process with BPMN compensation event subprocesses](https://github.com/camunda/zeebe/issues/14943)

 Users were unable to deploy a process with BPMN compensation event subprocesses due to existing validation rules. The system disallowed this action, limiting the complexity of processes that could be deployed.
 The current validation rules did not permit compensation start events within event subprocesses. The limitations came from restrictions that insisted that a compensation start event must exist within an event subprocess and that a compensation event subprocess should reside inside an embedded subprocess with no allowance made for the process level.
 The validation rules were modified to allow for compensation start events within event subprocesses. The said constraints related to the compensation start event and compensation event subprocesses were effectively attended to. 
 Now, users can successfully deploy a process with BPMN compensation event subprocesses. The process deployment capability is now more versatile, supporting complex processes inclusive of compensation start events and event subprocesses.
####  5.1.19. <a name='IcandeployaprocesswithBPMNcompensationeventshttps:github.comcamundazeebeissues14942'></a>[I can deploy a process with BPMN compensation events](https://github.com/camunda/zeebe/issues/14942)

Previously, users were unable to deploy processes with BPMN compensation events due to existing validation rules.
The underlying issue was caused by the system&#x27;s strict validation rules not allowing specific BPMN elements such as Compensation intermediate throwing event, Compensation end event, Compensation boundary event, and Activity with compensation marker (i.e., a compensation handler). 
We adjusted the validation rules to now allow these specific BPMN elements. At the same time, we maintained safeguards by ensuring set restrictions such as a compensation boundary event should have no outgoing sequence flows while a compensation handler should have no incoming and outgoing sequence flows and no boundary events.
Users are now able to successfully deploy processes incorporating BPMN compensation events, while still adhering to essential restrictions for proper functioning.
####  5.1.20. <a name='AddsupporttoJavaclientforFormdeletionhttps:github.comcamundazeebeissues14858'></a>[Add support to Java client for Form deletion](https://github.com/camunda/zeebe/issues/14858)

Previously, the Java clients were unable to delete forms due to a limitation in the system. 
The issue was rooted in the fact that support for form deletion was not incorporated in the initial development of the Java client. 
Developers rectified this by adding the necessary support in the Java client to allow form deletions seamlessly.
Now, Java clients can effectively delete forms as required, improving overall usage and experience.
####  5.1.21. <a name='ReplaceDependabotwithRenovatehttps:github.comcamundazeebeissues14701'></a>[Replace Dependabot with Renovate](https://github.com/camunda/zeebe/issues/14701)


Users observed unnecessary complexity in the repository due to both Dependabot and Renovate operating simultaneously. This dual operation did not cover all use cases efficiently.
The deployment of both Dependabot and Renovate within the repo primarily caused this complexity. Dependabot was not fulfilling all requirements, failing to match Renovate&#x27;s comprehensive utility.
To streamline the process, all requirements from Dependabot were transferred to Renovate, and Dependabot was subsequently removed from the system. Additional tests were completed to validate all the future PRs being created. Also, Dependabot&#x27;s Github related actions were removed.
Now, users will notice a simpler and more efficient repo operation, with Renovate covering all necessary dependency updates. Future PR validation is also ensured. Dependabot related elements will no longer exist in the GitHub actions configuration.
####  5.1.22. <a name='UsecachingforFormshttps:github.comcamundazeebeissues14562'></a>[Use caching for Forms](https://github.com/camunda/zeebe/issues/14562)

 Before this update, Forms were retrieved from the state without utilizing any caching mechanism, which affected the performance of retrieval
 Caching was not implemented in the DbFormState, which resulted in a lack of efficiency in form retrieval, especially when compared to the handling of Decision and Process resources in their respective DbState classes.
 We introduced a caching mechanism to DbFormState, similar to what is already in place for the Decision and Process states. 
 Now, the Forms retrieval is faster and more efficient, providing significant performance improvements.
####  5.1.23. <a name='Supportgeneral-usagetenant-providinginterceptorforSMhttps:github.comcamundazeebeissues14285'></a>[Support general-usage tenant-providing interceptor for SM](https://github.com/camunda/zeebe/issues/14285)

 Zeebe 8.3.0 users who wanted to set up their own tenant provider could not do this because the software only supported multi-tenancy over Identity.
 The tenant-providing logic was closely tied to the Identity token in the IdentityInterceptor making it impossible to extend or adapt it for custom solutions.
 We expanded the &#x60;InterceptorUtil&#x60; class to provide the &#x60;AUTHORIZED_TENANTS_KEY&#x60; gRPC context key. We also ensured that data provided by custom tenant-providing interceptors are used or ignored, based on multi-tenancy being enabled or disabled. 
 Now, users can implement a custom tenant-providing interceptor with much greater flexibility. The software can utilize the data provided by custom tenant-providing interceptors when multi-tenancy is enabled, and does not when it is disabled. Users can also override the Identity tenant-providing interceptor with their custom interceptors when multi-tenancy is enabled.
####  5.1.24. <a name='Supportmulti-tenancyforResourceDeletionhttps:github.comcamundazeebeissues14279'></a>[Support multi-tenancy for Resource Deletion](https://github.com/camunda/zeebe/issues/14279)

 
Previously, the system did not support tenant-aware resource deletion, meaning that resources could not be looked up using authorized tenant IDs, which restricted multi-tenancy.
 
The &#x60;ResourceDeletionProcessor&#x60; was not designed to lookup resources using authorized tenant IDs.
 
We have updated the &#x60;ResourceDeletionProcessor&#x60; to be capable of looking up resources using authorized tenant IDs. This included creating unit tests and QA tests for tenant-aware resource deletion. We also re-enabled the tests in the &#x60;TenantAwareTimerStartEventTest&#x60;.
 
Now, the system supports tenant-aware resource deletion, allowing resources to be found using authorized tenant IDs and supporting multi-tenancy.
####  5.1.25. <a name='SupportdeletionoftheFormsthroughDeleteResourcegRPChttps:github.comcamundazeebeissues14272'></a>[Support deletion of the Forms through DeleteResource gRPC](https://github.com/camunda/zeebe/issues/14272)

Users were previously unable to delete Forms using the DeleteResource gRPC, which limited their ability to manage resources within Zeebe.
The omission of Forms in the implementation of the DeleteResource gRPC function occurred during the development of epic #12874.
The DeleteResource gRPC function was updated to include capability for Form resource deletion.
Users are now able to delete Forms via the DeleteResource gRPC in Zeebe, providing more comprehensive resource management.
####  5.1.26. <a name='KeeptrackofeventtypesintheEnginehttps:github.comcamundazeebeissues13433'></a>[Keep track of event types in the Engine](https://github.com/camunda/zeebe/issues/13433)

Previously, users were unable to keep track of the event types that triggered elements in Grafana as this feature wasn&#x27;t available.
This limitation was due to the &#x60;ProcessEngineMetrics&#x60; class not tracking event types for the &#x60;element_instance_events_total&#x60; metric in the Engine. Consequently, this data wasn&#x27;t being registered, preventing users from viewing these metrics in Grafana.
We rectified this issue by updating the &#x60;ProcessEngineMetrics&#x60; class to accommodate event types. We then updated the &#x60;element_instance_events_total&#x60; metric to include activated, completed, and terminated element instances in the data tracked by Grafana.
Now, users are able to visualize and track event types that trigger elements in Grafana, streamlining the troubleshooting process and enhancing the overall user experience.
####  5.1.27. <a name='IndicatethetypeofactivatedcompletedterminatedcatcheventsinGrafanahttps:github.comcamundazeebeissues13410'></a>[Indicate the type of activated/completed/terminated catch events in Grafana](https://github.com/camunda/zeebe/issues/13410)


Previously, there was an incident of the Engine lagging behind in processing new records. This was observed through Grafana, however, the specific type of catch event taking CPU time was not identifiable. The issue needed further investigation in other log resources for a root cause analysis.
The problem was caused by a timer catch event that continuously generated new records, overloading the thread pool. In Grafana&#x27;s &#x60;General Overview -&gt; Current Events&#x60; view, it wasn&#x27;t indicated which type of catch event was causing the issue, limiting the detailed investigation. 
The solution involved adding the catch event types to the aforementioned Grafana view. Thus, each element instance contained its own type which improved detailed logging. 
Now, the Grafana &#x60;General Overview -&gt; Current Events&#x60; view portrays each element&#x27;s type, providing a more comprehensive and accessible log. This enhancement speeds up troubleshooting and negates a need for seeking additional log resources. The view is now equipped with activation, completion, and termination information of catch events.
####  5.1.28. <a name='Zeebesupportsmulti-tenancyforBPMNsignaleventshttps:github.comcamundazeebeissues13336'></a>[Zeebe supports multi-tenancy for BPMN signal events](https://github.com/camunda/zeebe/issues/13336)

Previously, Zeebe did not have multi-tenancy support for signal broadcasting. 
This was because the &#x60;SignalSubscriptionState&#x60; could not persist the &#x60;tenantId&#x60;, and the engine was unable to process &#x60;SignalRecord&#x60; commands with a tenant id.
To address this, elements were worked on including: ensuring the &#x60;SignalSubscriptionState&#x60; could persist the &#x60;tenantId&#x60;, enabling the engine to process &#x60;SignalRecord&#x60; commands with a tenant id, and updating all impacted Elasticsearch/Opensearch record templates to include a &#x60;tenantId&#x60;. Additionally, a data migration for ProcessingStates used by signal broadcasting was provided.
Zeebe now supports multi-tenancy for BPMN signal broadcasting, allowing more flexible and secure handling of signal broadcasts across different tenants.
####  5.1.29. <a name='Icanexecuteaprocesswithacompensationendeventhttps:github.comcamundazeebeissues14967'></a>[I can execute a process with a compensation end event](https://github.com/camunda/zeebe/issues/14967)

Previously, a process model with a compensation end event could not be deployed to the engine. Compensation end event support has been added to the engine, although the compensation handler is not invoked. This is a partial implementation as part of the overall implementation of support for compensation events, which is ongoing. As a result, in this release a process model containing a compensation end event may be deployed and executed. 
####  5.1.30. <a name='IcanmodelaprocesswithcompensationeventsviaBPMNmodelAPIhttps:github.comcamundazeebeissues14939'></a>[I can model a process with compensation events via BPMN model API](https://github.com/camunda/zeebe/issues/14939)

A new API for modeling a BPM compensation event has been implemented with this release. It is now accomplished with the following code:
&#x60;&#x60;&#x60;java
  Bpmn.createProcess().startEvent()
    .userTask(&quot;task&quot;)
    .boundaryEvent(&quot;boundary&quot;)
    .compensation(c -&gt; c.userTask(&quot;compensate&quot;))
    .moveToActivity(&quot;task&quot;)
    .endEvent(&quot;theend&quot;)
    .done(); 
###  5.2. <a name='ZeebeMiscBugFixes'></a>Zeebe > Misc > Bug Fixes
####  5.2.1. <a name='Aftercancellationacompletedchangeoperationshouldnotoverwriteupdatedtopologyhttps:github.comcamundazeebeissues15726'></a>[After cancellation, a completed change operation should not overwrite updated topology](https://github.com/camunda/zeebe/issues/15726)

In the past, the software failed to maintain updated topology changes upon the cancellation of a change operation. This led to the overwrite and subsequent loss of crucial topology adjustments, causing disruptive breaches in the network infrastructure. 
The root problem was from a sequencing misalignment in the cancellation and overwrite mechanisms. When a change operation was cancelled, the programming logic did not consider subsequent topology updates that occurred during the operation, resulting in the overwrite of the updated topology.
A modification in the programming logic was implemented to account for topology updates during a change operation. Should a cancellation occur, the system would then preserve these updates instead of overwriting them.
Today, after a change operation is cancelled, any completed topology updates are preserved and not overwritten. This ensures the integrity of the network infrastructure is maintained, leading to a more robust, reliable system.
####  5.2.2. <a name='Specialcharactersinstaticinputsshouldnotbeescapedhttps:github.comcamundazeebeissues15447'></a>[Special characters in static inputs should not be escaped](https://github.com/camunda/zeebe/issues/15447)

Users previously noticed that special characters in static inputs were incorrectly escaped. For example, a simple input like &#x60;Hello\n\nYOU!&#x60; turned into &#x60;&quot;Hello\\\\n\\\\nYOU!&quot;&#x60;.
This occurred due to an oversight in the string processing component of the system. The function responsible for handling static input was incorrectly escaping special characters.
The team adjusted the static input handler to properly treat special characters. We modified the string processing functionality to prevent unwanted character escape.
Now, the system correctly handles special characters in static inputs. Inputs like &#x60;Hello\n\nYOU!&#x60; are preserved exactly as intended, improving overall system reliability and user experience.
####  5.2.3. <a name='VerifycorrectbehaviourofinputmappingsafterbumptoFEEL1.17.3https:github.comcamundazeebeissues15445'></a>[Verify correct behaviour of input mappings after bump to FEEL 1.17.3](https://github.com/camunda/zeebe/issues/15445)

Users had to deal with special characters inside input mappings being escaped. 
The execution of FEEL 1.17.3 was escaping special characters, due to an issue in the coding of the software.
The software was updated to FEEL 1.17.3, which contained the appropriate code to correct this issue. 
Users can now incorporate special characters inside input mappings without them being automatically escaped.
####  5.2.4. <a name='NullPointerExceptionwhenjoinisretriedafterarestarthttps:github.comcamundazeebeissues15381'></a>[NullPointerException when join is retried after a restart](https://github.com/camunda/zeebe/issues/15381)

 
Users testing the impact of pod restarts during dynamic scaling faced a &#x60;NullPointerException&#x60; error which led to the partition join being stuck. 
 
The issue was caused by the fact that when a join request was retried after a server B restart, the server B was assumed by the leader to already have the configuration. When an append request was sent to server B, a null pointer exception was returned as the configuration was held in memory and was lost when server B restarted.
 
Two fixes were implemented:
1. The leader was updated to resend the configuration when it receives a duplicate join request allowing the follower to handle the null pointer exception by rejecting the AppendRequest. This allowed the follower to eventually receive the new configuration.
2. The &#x60;configurationIndex&#x60; was added to the &#x60;AppendResponse&#x60; so that the leader can resend the configuration if necessary.
 
Now, when a pod restart happens during dynamic scaling and a join request is retried, a null pointer exception doesn&#x27;t stop the partition join process. Instead, the leader correctly resends the configuration ensuring system stability.
####  5.2.5. <a name='ITtimeoutduetox60ScaleResiliencyTest.ScaleDownx60https:github.comcamundazeebeissues15343'></a>[IT timeout due to &#x60;ScaleResiliencyTest.ScaleDown&#x60;](https://github.com/camunda/zeebe/issues/15343)

 Users had experienced frequent test failures caused by timeout during operations. This issue prevented merging of some changes, impacting workflow and productivity.
 The issue was linked to the &#x60;ScaleResiliencyTest.ScaleDown&#x60; process. An error occurred when Broker-2 attempted to leave partition 2, but couldn&#x27;t due to Broker-1&#x27;s unavailability. The commit of the first part of the joint consensus happened before Broker-2 restart. Upon Broker-1 restart, sometimes the partition 2 in Broker-2 was not yet up, causing the leader to commit the second part of the joint consensus before Broker-2 was ready. This led to Broker-2 waiting indefinitely for partition 2 to be ready, resulting in a system timeout and test failure.
 The issue was resolved by implementing a system control to ensure that the Broker-2 becomes ready prior to the start up of Broker-1. This provided a proper sequence for the commit of both parts of the joint consensus, ensuring the readiness of partitions before any further actions were taken.
 Users can now smoothly conduct their operations and tests without encountering timeout issues. The fix allows for changes to be merged successfully, enhancing workflow and productivity. Known issues with the &#x60;ScaleResiliencyTest.ScaleDown&#x60; process have been addressed, ensuring seamless operation.
####  5.2.6. <a name='Formeventsarenotreplayedhttps:github.comcamundazeebeissues15194'></a>[Form events are not replayed](https://github.com/camunda/zeebe/issues/15194)


Users experienced the loss of deployed forms in versions 8.3 and 8.4.0-alpha1, which led to incidents being raised at User Tasks due to these missing forms. As a consequence, the system failed to replay the form events, causing discrepancies in the state.
The underlying issue was a glitch in the replay mode where form events were missed, causing the system not to add them to the state. This led to a scenario where existing jobs of User Tasks were still referring to the key of the missing forms.
The technical team addressed the glitch in the replay mode to ensure all form events were duly recorded and added to the state. Simultaneously, measures were taken to prevent the loss of deployed forms.
 
Now, when instances activate User Task with form id set, no Incident arises as no Form is missing. All form events are replayed correctly in the system, maintaining the state accuracy. Also, users no longer have to redeploy the form, eliminating chances of repeatedly experiencing the bug.
####  5.2.7. <a name='Couldnotupdatenewleaderforpartitionhttps:github.comcamundazeebeissues15188'></a>[Could not update new leader for partition](https://github.com/camunda/zeebe/issues/15188)

 The update of a new leader for a partition was unsuccessful, causing difficulties in managing the partition, which could potentially impact the efficiency of data processing and handling.
 The system expected to find a non-null value for the current leader term but found a null value instead, resulting in an inability to update the new leader for the partition. The specific causing factors weren&#x27;t discernible from the log.
 An investigation was conducted to clarify the issue and subsequently, appropriate adjustments and validations were implemented to ensure the correct retrieval and assignment of the non-null leader term value, thereby optimizing the leader update process.
 A partition leader now gets updated accurately and efficiently, ensuring improved management of partitions and data processing. Any future attempts to update a new leader for a partition should no longer encounter the same problem.
####  5.2.8. <a name='Avoidexecutingprocessaccordingtounprocessedcommandsreferringtosourceprocessdefinitionhttps:github.comcamundazeebeissues15129'></a>[Avoid executing process according to unprocessed commands referring to source process definition](https://github.com/camunda/zeebe/issues/15129)

 In the past, during migration of process instances not entirely in a wait state, Zeebe would incorrectly execute the process instance as if the migration had not happened. This was due to unprocessed commands referring to the source process definition being on the log stream with a higher position than the process instance migration command.
 The cause of this issue was that the system wasn&#x27;t designed to handle process instances that weren&#x27;t entirely in a wait state during migration. There was a lack of clarity on how to deal with this issue.
 The issue was fixed by choosing not to trust the process definition key in such commands, but rather to look up the process definition from the state when processing commands. This solution was less restrictive, allowing for migrations of process instances in active execution rather than only those in a complete wait state.
 Currently, during process instance migration, the process instance correctly executes after migration, whether or not the process instance is entirely in a wait state. No unprocessed commands mess up the execution. The log stream now has a more robust design that simplifies reasoning about the system and brings consistency to implementation.
####  5.2.9. <a name='8.3.xreleasebenchmark-Authorizationdataunavailable:TheTokencanx27tbeusedbeforexxxhttps:github.comcamundazeebeissues15047'></a>[8.3.x release benchmark - Authorization data unavailable: The Token can&#x27;t be used before xxx](https://github.com/camunda/zeebe/issues/15047)


Previously, user workflows were unexpectedly halted due to a DEAD partition, marked as such because of a JWT Authorization data unavailability issue. The error message &quot;Token can&#x27;t be used before xxx&quot; was thrown, indicating that the system was attempting to utilize the JWT token before the allowed time. 
This issue was rooted in a timing discrepancy. The &#x60;Instant.now()&#x60; method, which sets the &#x60;JWT#issuedAt&#x60; value, was used in a cluster with a different timezone setting. The discrepancy resulted in the JWT validation throwing an exception.
 
The fix considered the importance of JWT&#x27;s only role as a data transport method that does not require signing and is not used outside Zeebe. Therefore, we implemented two changes:
- The &#x60;issuedAt&#x60; claim was removed as it was redundant.
- The JWT validation was disabled to prevent this issue from recurring for existing JWT tokens.
In replacement of the removed claim, we created our own validation to ensure the presence of &#x60;authorized_tenants&#x60; JWT, which can be done by checking for null when fetching the claim. 
As it stands, users can use Zeebe without encountering a DEAD partition due to JWT token unavailability. Furthermore, there is additional validation for the &#x60;authorized_tenants&#x60; JWT to maintain system integrity. Despite the changes, the performance of workflows and operations of previous versions remain intact.
####  5.2.10. <a name='Adeployedformisnotmentionedinthex60DeploymentEventImpl.toStringx60https:github.comcamundazeebeissues14931'></a>[A deployed form is not mentioned in the &#x60;DeploymentEventImpl.toString()&#x60;](https://github.com/camunda/zeebe/issues/14931)

 In the past, when users deployed a form using the Java client, the output of the DeploymentEvent did not include the deployed form. This happened even though the form was successfully deployed, causing a discrepancy in the logged information.
 The underpinning cause of this issue was that the &#x60;DeploymentEventImpl.toString()&#x60; function was not engineered to include forms in its output.
 We modified the &#x60;DeploymentEventImpl.toString()&#x60; function&#x27;s implementation. The change ensures it includes forms as part of the printed output when a form is deployed with the Java client.
 Now, when a form is deployed using the Java client, the output of the DeploymentEvent correctly prints the deployed form. This adjustment provides users with accurate information about their deployed resources.

####  5.2.11. <a name='IOPSdoubledinCW44https:github.comcamundazeebeissues14924'></a>[IOPS doubled in CW44](https://github.com/camunda/zeebe/issues/14924)

Consequence:
In CW44, intermittent nodes were observed to perform at a rate of upto 8000 IOPS, which was double the rate of ~4000 IOPS noted in previous benchmarks. This inconsistent performance was puzzling as all nodes were expected to maintain a benchmark rate of 4000 IOPS regardless of their leadership status on partitions.
Cause:
After investigation, the underlying cause of the issue was found to be duplicate metrics. Certain nodes and their metrics were being counted twice, causing an apparent doubling of the IOP rate.
Fix:
The issue was rectified by revising the method used to count metrics and removing the potential for duplication. This fix followed a similar resolution approach to an earlier CPU related problem (ref: camunda/zeebe/pull/13386).
Result:
With the correction of the metrics calculation, the nodes now perform consistently without apparent unexpected surges in IOPS. The performance rate of the nodes is now reliably at 4000 IOPS, eliminating the intermittent spikes observed previously.
####  5.2.12. <a name='Improveresilienceofremotestreamrestarthttps:github.comcamundazeebeissues14884'></a>[Improve resilience of remote stream restart](https://github.com/camunda/zeebe/issues/14884)

 Previously, brokers inappropriately requested all members to restart their streams whenever a new member was added, which created disruptions. Moreover, in the case of failure, no retries were implemented, which could result in interrupted and unknown streams on the brokers.
 The primitive behaviour of brokers where they sent restart requests to all members, not just gateways, was the cause of the issue. Coupled with the lack of a retry mechanism for failures, this led to susceptibility to errors and interruptions in the stream.
 The software was modified to ensure that restart requests are now directed exclusively at gateways, and not all members. Additionally, a retry mechanism with back-off strategy was introduced to handle any request failures.
 As a result of this fix, when a new member is added, only gateways restart their streams, reducing disruption significantly. If a request fails, the system automatically retries till it succeeds, ensuring constant and uninterrupted streams on the brokers.
####  5.2.13. <a name='UDPresourceleakshttps:github.comcamundazeebeissues14837'></a>[UDP resource leaks](https://github.com/camunda/zeebe/issues/14837)

 
In versions CW42 and CW43, a major UDP resource leak was observed, which eventually resulted in all UDP listening connections reaching their maximum limit. This constraint prevented any new listening connections from being created, leading to substantial DNS failures. As a result, data could no longer be exported, causing the system to run out of disk space.
 
The issue emerged due to a constant increase in the number of open UDP connections, specifically related to the Java process. This behaviour did not conform to the expected setup where only two constant connections should be operating, namely the Netty unicast service and sporadic temporary connections.
 
The error was identified and a patch was applied to control the creation and maintenance of UDP connections by the Java process. The fix ensured that only the necessary UDP connections (Netty unicast service and temporary ones) would be operational.
 
With the implementation of the patch, the system is now equipped to correctly maintain the UDP connections. This results in the conservation of system resources, as indicated by adequate free disk space and efficient data export processes. Furthermore, the risk of systemic DNS failures due to UDP listening connection overflow is now mitigated.
####  5.2.14. <a name='Leakedmessagesubscriptionscauseconstantprocessingloadhttps:github.comcamundazeebeissues14814'></a>[Leaked message subscriptions cause constant processing load](https://github.com/camunda/zeebe/issues/14814)

 
In Zeebe 8.2.12 Cluster, system users experienced a consistent high processing load due to leaked message subscription issues.
 
The problem was caused by a discrepancy between partitions. On one partition, the subscription column had an entry marked as correlating that continued to send &#x60;PROCESS_MESSAGE_SUBSCRIPTION/CORRELATE&#x60; repetitively. However, another partition lacked this entry. The underlying issue was a lost &#x60;MESSAGE_SUBSCRIPTION/CORRELATE&#x60; or &#x60;MESSAGE_SUBSCRIPTION/DELETE&#x60; command, leading to the persistence of the subscription entry. 
 
The technical fix addressed this persistent state and handled non-interrupting subscriptions by removing them from the state immediately, then sending &#x60;MESSAGE_SUBSCRIPTION/CORRELATE&#x60; one time. It also resolved the issue by cleaning up the subscription once the receiving partition rejected it. 
 
As a result of this fix, the partition issues are resolved, reducing system load. The Zeebe 8.2.12 Cluster no longer has repeating &#x60;PROCESS_MESSAGE_SUBSCRIPTION/CORRELATE&#x60; commands, which reduces rejections and optimizes the overall processing capacity of the software. The system no longer gets stuck in a broken state and operates with improved efficiency.
####  5.2.15. <a name='Jobstreamsnotaggregatedcorrectlyongatewayhttps:github.comcamundazeebeissues14773'></a>[Job streams not aggregated correctly on gateway](https://github.com/camunda/zeebe/issues/14773)

 Previously, the aggregation of job streams on the gateway was not functioning correctly. Despite having the same parameters, two identical job streams were assigned different server stream IDs.
 This issue originated from our usage of &#x60;ArrayProperty&#x60; and &#x60;ArrayValue&#x60;. The &#x60;equals&#x60; and &#x60;hashCode&#x60; implementations for these relied on the last modification being reflected in their internal buffer, which was not always accurate.
 We addressed this issue by redefining the consistency between &#x60;equals&#x60; and &#x60;hashCode&#x60; methods for &#x60;ArrayProperty&#x60; and &#x60;ArrayValue&#x60; to reliably reflect each modification.
 Now job streams with identical parameters will be accurately aggregated on the gateway and correctly assigned the same server stream ID.
####  5.2.16. <a name='Jobstreamsnotregisteredonbrokeraftersometimehttps:github.comcamundazeebeissues14771'></a>[Job streams not registered on broker after some time](https://github.com/camunda/zeebe/issues/14771)

Before the fix, brokers were losing track of registered job streams after a certain period of operation. Despite this, the gateway actuator reported the streams as being connected to all brokers, leading to inconsistent gateway and broker stream states. 
The underlying cause of the issue was that when a broker was locally removed and re-added, the system did not send a restart streams request to the gateway. Essentially, the streams were not recreated as expected, leading to the said inconsistency.
A correction was made to rectify the flawed process. The system was tweaked to ensure that a restart streams request is sent to the gateway each time a broker rejoins, prompting the streams to be recreated successfully.
With the fix applied, the system ensures that the gateway and broker stream states remain consistent as they are supposed to. Brokers no longer lose track of the job streams, thus resolving the initial issue.
####  5.2.17. <a name='IllegalStateException:foundsnapshot0.Aprevioussnapshotismostlikelycorruptedhttps:github.comcamundazeebeissues14699'></a>[IllegalStateException: found snapshot 0. A previous snapshot is most likely corrupted](https://github.com/camunda/zeebe/issues/14699)

 Users experienced an &#x60;IllegalStateException&#x60; during the startup of the Zeebe broker, indicating a likely corruption. This problem caused the broker to get stuck in a bootloop, impacting its availability and functionality.
 The broker encountered snapshot 0 due to inconsistencies in saving state resulting from a failure of the underlying file I/O operations. Notably, the system had a race condition where the checksum file was created but was left empty due to an unexpected crash during the write operation.
 A safeguard was implemented to handle file I/O operations more intelligently, preventing the creation of empty checksum files and ensuring a smoother recovery from unexpected crashes. Synchronization issues around snapshotting were also resolved.
 The Zeebe broker now handles potential data corruption more gracefully. On bootup, file integrity checks are robust and the chance of handling and recovering from &quot;snapshot 0&quot; errors has been significantly improved. The broker&#x27;s overall stability, in terms of data consistency and recoverability, has been enhanced.

####  5.2.18. <a name='RegularOOMwhenreplicatinglargestateduetomessagingtimeoutshttps:github.comcamundazeebeissues14663'></a>[Regular OOM when replicating large state due to messaging timeouts](https://github.com/camunda/zeebe/issues/14663)

 Users experienced repeated out-of-memory errors when replicating a snapshot larger than 4GB. This disruption was mainly caused by the &#x27;NettyMessagingService&#x27; timeout executor.
 The error occurred due to the code design where the scheduled lambda closed over the complete message. When the snapshot replication involved large files, messages being in double (or at worst, triple) digit megabytes quickly exhausted memory resources.
 We&#x27;ve revisited the underlying code to optimize memory usage. Now, instead of closing over the complete message, which was used only for logging, we&#x27;ve kept its scope to a bare minimum, preventing unnecessary piling up of memory resources.
 With this fix, Zeebe Version 8.3.1, users would no longer face out-of-memory issues during large snapshot replication, significantly improving the stability and reliability of the service.
####  5.2.19. <a name='MsgpackReaderExceptionwhenreadingTenantIdhttps:github.comcamundazeebeissues14624'></a>[MsgpackReaderException when reading TenantId](https://github.com/camunda/zeebe/issues/14624)


Users of release-8-3-0 benchmark encountered a MsgpackReaderException error while trying to read TenantId. This resulted in the system being unable to process certain records due to not being able to determine the string type. This error prevented the job push feature, which is in its experimental phase, from being usable.
The problem was due to the job streamer, an object that exists once per broker and is shared between partitions on the broker. If a broker is leader for more than one partition, iterating through the tenants in the &#x60;JobActivationPropertiesImpl&#x60; failed as the ArrayProperty was not thread-safe. Processing was impacted because iteration over a supposed immutable &#x60;ArrayProperty&#x60; led to mutation of the object.
An immediate fix was carried out by cloning the job activation properties in the &#x60;BpmnJobActivationBehavior&#x60;, before obtaining the list of tenants. Since a copy was created, the issue of multiple partitions iterating over the same &#x60;ArrayProperty&#x60; was resolved.
Release-8-3-0 benchmark can now correctly process records without encountering the MsgpackReaderException. Users can utilise the job push feature without fear of the system throwing exceptions due to mutation of the ArrayProperty.
####  5.2.20. <a name='NPEinx60PendingMessageSubscriptionCheckerx60https:github.comcamundazeebeissues14588'></a>[NPE in &#x60;PendingMessageSubscriptionChecker&#x60;](https://github.com/camunda/zeebe/issues/14588)


Users experienced an unexpected NullPointerException (NPE) when the PendingMessageSubscriptionChecker ran concurrently to the stream processor in the Camunda Zeebe engine. This issue caused a disruption in regular processing and a drop in availability.
The issue was caused by a race condition. The PendingMessageSubscriptionChecker and the stream processor were both accessing a shared in-memory state concurrently. However, this state was not spread over multiple calls, leading to synchronization issues between the transient state and the persisted state.
The development team addressed this issue by adding a null check in PendingMessageSubscriptionChecker, which safely skips any subscription record that is removed from the state. This ensured that the MessageSubscriptionRecord could be either correlated or deleted from the state without causing an error.
With the fix applied, the PendingMessageSubscriptionChecker can now run concurrently to the stream processor without any issues. Therefore, there is no disruption in regular processing, ensuring constant availability. The race condition is now less likely to occur, promoting stability in the system. Users are no longer experiencing the NullPointerException (NPE), which improves the overall user experience.
####  5.2.21. <a name='NullPointerException:Cannotinvokex60PartitionContext.getComponentHealthMonitorx60becausex60this.contextx60isnullhttps:github.comcamundazeebeissues14458'></a>[ NullPointerException: Cannot invoke &#x60;PartitionContext.getComponentHealthMonitor()&#x60; because &#x60;this.context&#x60; is null ](https://github.com/camunda/zeebe/issues/14458)


During the shutdown process, users experienced a NullPointerException (NPE) when the healthcheck service attempted to query the health of a Zeebe partition.
The NPE occurred due to the system attempting to invoke the &#x60;PartitionContext.getComponentHealthMonitor()&#x60; on a null context item. This was a result of the Partition Context not being fully initialized or being prematurely disposed of during the shutdown process.
A validity check was introduced before invoking the &#x60;getComponentHealthMonitor()&#x60; method. If the context is null, the system will deem the component as unhealthy, thus preventing the NullPointerException.
Users no longer encounter a NullPointerException during shutdown. Instead, if a Zeebe partition&#x27;s context is null during shutdown, the system will safely report the component as unhealthy.
####  5.2.22. <a name='Snapshotversionofbenchmarkapplicationstarterworkerdoesnx27tworkwithSaaShttps:github.comcamundazeebeissues14047'></a>[Snapshot version of  benchmark application (starter/worker) doesn&#x27;t work with SaaS](https://github.com/camunda/zeebe/issues/14047)

 Users were unable to connect the benchmark starter and worker to SaaS clusters, forcing them to use outdated versions and impacting their ability to generate datasets and execute game days. 
 The cause was a misconfigured client builder within the benchmark applications, which was set to use plaintext rather than establishing a proper, secure connection with the SaaS clusters. Despite the presence of a configuration for Transport Layer Security (TLS), this wasn&#x27;t utilized as intended.
 The TLS configuration within the benchmark applications was corrected so that it is used properly, establishing a secure connection with the SaaS clusters. 
 Users can now connect the benchmark starter and worker to SaaS clusters smoothly and without any errors, improving the usability and reliability of these benchmark applications.

####  5.2.23. <a name='Scheduledtasksshouldavoidoverloadingthestreamprocessorhttps:github.comcamundazeebeissues13870'></a>[Scheduled tasks should avoid overloading the streamprocessor](https://github.com/camunda/zeebe/issues/13870)

In the past, the workflow engine was burdened by numerous scheduled tasks that would append commands to the log stream and repeatedly overload the stream processor, causing system inefficiencies and potential outages. 
This issue mainly arose because tasks like &#x60;JobTimeoutTrigger&#x60; lacked any constraints preventing them from appending the same &#x60;Job:TIME_OUT&#x60; command multiple times if the stream processor became blocked. Furthermore, there were possible concurrency issues with the &#x60;DueDateTimerChecker&#x60;, which could lead to more timers being scheduled under high load.
A new approach was adopted, using a local cache in state checkers like &#x60;DueDateTimerChecker&#x60;. The cache stores the keys of tasks that have been written, preventing the same task from being written again. Furthermore, lossy cache-based prototype was built and enhanced with LRU (Least Recently Used) eviction for efficiency. This solution has been extended to other local checkers such as job timeout and message expiry.
With the new fix in place, the same tasks are not repeatedly written, significantly reducing the system load and preventing potential blockages. Now, timers, job timeouts, and message expiries make efficient use of caching to ensure smooth operation of the system. Moreover, the limit on timer triggers and the addition of rate limits between different categories further reinforces system efficiency.
####  5.2.24. <a name='EvaluateDecisionrequestreturnsdoublequotedstringhttps:github.comcamundazeebeissues13551'></a>[EvaluateDecision request returns double quoted string](https://github.com/camunda/zeebe/issues/13551)

 Users extracting string output from their decision evaluation using the EvaluateDecisionCommand in Zeebe experienced the unexpected behaviour of the output being enclosed in extra quotation marks.
 This issue was caused by an unusual handling of string transformations in Zeebe&#x27;s DMN engine. Instead of rendering the strings in a standard format, the engine was enclosing the string in an additional set of quotes. 
 Adjustments were made to the procedure Zeebe used for transforming and returning strings in the EvaluateDecisionCommand. The fix removed the additional set of quotes that were being added in the transformation process. 
 Now, when a user extracts the output of their decision evaluation using the EvaluateDecisionCommand in Zeebe, the extracted string is not enclosed in any additional quotation marks. The output is returned in the standard, expected format.
####  5.2.25. <a name='Inconsistentunnecessaryescapingofcharactersininputshttps:github.comcamundazeebeissues9859'></a>[Inconsistent/unnecessary escaping of characters in inputs](https://github.com/camunda/zeebe/issues/9859)

 
In the past, users were experiencing inconsistency and unnecessary escaping of special characters in inputs, including double escaping and escaping of unicode characters. This issue was notably impacting connectors and was causing failure of jobs due to escaped double quotes.
 
The cause of this issue was rooted in the way the FEEL engine was handling escaping of characters. In particular, characters in dynamic inputs were being unnecessarily escaped, and this was happening inconsistently with static inputs. This issue was affected by the handling of newline characters and unicode characters. 
 
We implemented a bug fix on the FEEL engine that rectified the unnecessary and inconsistent escaping of special characters and ensured that unicode characters are not escaped in input mappings. This fix involved bumping the FEEL version to 1.17.3. We also ensured that static inputs are also handled correctly, in that special characters in them are not escaped.
 
Users can now pass special characters in strings without the fear of inconsistent or unnecessary escaping of these characters. Newline and unicode characters are handled correctly, and the handling is consistent across static and dynamic inputs. The new behaviour has been communicated via the release notes and the support team is aware of the change. The documentation on Input Mappings has been updated to reflect the new behaviour.

####  5.2.26. <a name='Feelerrorarecausingbaduserexperienceshttps:github.comcamundazeebeissues8938'></a>[Feel error are causing bad user experiences](https://github.com/camunda/zeebe/issues/8938)


Users encountered incidents with unclear messages when creating instances with invalid feel expressions. This issue was particularly frustrating for users working with larger, more complex feel expressions, and for those who did not have access to the logs for error troubleshooting.
The underlying issue was that the Feel engine&#x27;s response did not adequately communicate the problem when evaluating invalid feel expressions. Instead of providing pertinent details that pointed toward a resolution, the response simply declared the result as &#x27;NULL&#x27;.
We upgraded the FEEL engine to a newer version (1.17.0) and utilized its new API, which returns not just the evaluation result, but also potential warnings. We&#x27;ve integrated these warnings into the incident messages to provide users with more context about problems.
Now, when an instance is created with an invalid FEEL expression, the incident message includes not only the expectation and the result but also any warnings associated with the evaluation. These warnings provide specific details about the fault, like unknown functions or invalid types, leading to improved transparency and troubleshooting.
####  5.2.27. <a name='Failedjobsarenotreactivateafterbackoffhttps:github.comcamundazeebeissues14329'></a>[Failed jobs are not reactivate after backoff](https://github.com/camunda/zeebe/issues/14329)

A combination of migrating a broker to a new version and jobs that had failed with a backoff time specified could result in jobs becoming stuck and not retried after a broker migration to a new version. This was due to a bug in the algorithm used to delete orphaned jobs from the queue. The algorithm has been fixed and failed jobs with a backoff time now function as expected after migration.
###  5.3. <a name='ZeebeMiscDocumentation'></a>Zeebe > Misc > Documentation
####  5.3.1. <a name='Addmissingstepstodeveloperhandbookhttps:github.comcamundazeebeissues15287'></a>[Add missing steps to developer handbook](https://github.com/camunda/zeebe/issues/15287)

Developers were previously left confused and dealing with bug reports and failing CI due to incomplete instructions in the developer handbook, specifically for adding new record types.
Steps for including a new value type in the engine&#x27;s supported value types and for Zeebe Process Test (ZPT) support were mistakenly omitted from the developer handbook.
We added the two missing steps into the developer handbook, providing clear instructions for adding new record types.
Now, developers can follow the enhanced, detailed guide in the developer handbook, reducing the chance of bug reports or CI failures related to the addition of new record types.
###  5.4. <a name='ZeebeMiscMergedPullRequests'></a>Zeebe > Misc > Merged Pull Requests
####  5.4.1. <a name='buildtopology:addbackwardcompatibilitycheckforprotobufmessageshttps:github.comcamundazeebepull15744'></a>[build(topology): add backward compatibility check for protobuf messages](https://github.com/camunda/zeebe/pull/15744)

Users experienced failures when attempting to use older versions of protobuf messages with the topology module, as there was no support for backward compatibility.
This issue originated from a lack of checks in the system to ensure backward compatibility for protobuf messages in the topology module.
A maven plugin was added to prevent backward incompatible changes to protobuf messages in the topology module.
Users are now able to use both older and newer versions of protobuf messages with the topology module, as it can successfully manage backward compatibility.
####  5.4.2. <a name='fixtopology:donotupdatethetopologyiftheoperationwascancelledhttps:github.comcamundazeebepull15727'></a>[fix(topology): do not update the topology if the operation was cancelled](https://github.com/camunda/zeebe/pull/15727)

Previously, there was an issue where even after the cancelation of an operation, the changes associated with it were still sporadically applied to the topology.
This was caused by the flawed comparison within the operation that failed to validate the status of the topology and its suitability to handle changes.
The issue was resolved by implementing a check that compared the expected topology with the current one before enacting any changes. This check ensures changes are only applied when the operation remains valid and hasn&#x27;t been cancelled.
Now, when an operation is cancelled, the system no longer applies associated changes to the topology, ensuring consistency and averting potential inaccuracies in the updated topology.
####  5.4.3. <a name='fixtopology:maintaingossipstateupdateorderinghttps:github.comcamundazeebepull15709'></a>[fix(topology): maintain gossip state update ordering](https://github.com/camunda/zeebe/pull/15709)

Prior to the fix, users were experiencing an issue where the gossip state updates were not maintained in an orderly manner, leading to system inconsistencies and unreliable data exchange.
The issue was caused by a deficiency in the implementation of the gossip protocol in our topology module. This defect resulted in updates not being consistently ordered, which consequently affected system stability.
The engineering team addressed this issue by refining the algorithm within the topology module. They reinforced the logic to ensure the ordering of gossip state updates, thus eliminating the inconsistency previously observed.
With this fix, users can now rely on the proper functioning of the gossip protocol in our system. Gossip state updates are correctly sequenced, preventing any related system inconsistencies and enhancing overall data integrity.
####  5.4.4. <a name='depsgithub-tags:Updateactionsupload-artifactactiontov4mainhttps:github.comcamundazeebepull15629'></a>[deps(github-tags): Update actions/upload-artifact action to v4 (main)](https://github.com/camunda/zeebe/pull/15629)

Apologies for the confusion, the provided text does not contain any information about a specific issue but rather an update. Please provide a GitHub issue text with a suitable problem description. If the update is what you want to be transformed into a release note, more details about what it addressed and its impact would be helpful.
####  5.4.5. <a name='fixgithub:newprojectautomationtokenforadd-to-projectshttps:github.comcamundazeebepull15619'></a>[fix(github): new project automation token for add-to-projects](https://github.com/camunda/zeebe/pull/15619)

Users who tried to automate new projects by adding them to existing projects through automation tokens were unable to do so. 
The existing coding structure did not cater for the translation of the new project automation token into an instruction to add new projects to existing ones. 
The system was updated to recognise and deliver the instructions bundled in the new project automation token. 
Users can now effortlessly automate the addition of new projects to existing ones using their automation tokens.
####  5.4.6. <a name='Revertquotfixgithub:useprojectadmintokenforprojectqueryquothttps:github.comcamundazeebepull15618'></a>[Revert &quot;fix(github): use project admin token for project query&quot;](https://github.com/camunda/zeebe/pull/15618)

Based on the request, here is the release note:
Previously, users experienced an issue where the project query was not functioning correctly. 
This was due to the use of project admin tokens in the project query, introduced in commit 6bcd02082e5e6d5a6087560c113c4e650e7f61f7. 
To rectify this, we have completed a revert of the mentioned commit, removing the use of the project admin token. 
Now, the project queries are functioning correctly and no longer use project admin tokens.
####  5.4.7. <a name='fixgithub:fixedforaddtoprojectsworkflowhttps:github.comcamundazeebepull15617'></a>[fix(github): fixed for add to projects workflow](https://github.com/camunda/zeebe/pull/15617)

 Users previously encountered a warning on how variables were set during the &#x27;add to projects&#x27; workflow, and incorrect conditions also caused the &#x27;has-project&#x27; step to malfunction. Also, usage of the GitHub repo token returned no results due to lack of project query access.
 The warning resulted from improper setting of variables. Also, the &#x27;has-project&#x27; step&#x27;s malfunction was based on the problem that it expected a boolean value and not a string. The lack of results returned using the GitHub repo token was due to it not having access privileges for project queries.
 The variable settings were correctly configured, resolving the warning. The &#x27;if&#x27; conditions were fixed to work with string inputs instead of booleans. A project admin token was implemented in place of the GitHub repo token to execute project queries successfully since it had the required access privileges.
 Now, no warning would appear regarding the set variables. &#x27;Has-project&#x27; step will work without any issues since it can now process string results. Finally, users receive results from project queries because the project admin token provides the necessary access.
####  5.4.8. <a name='Handlejobworkerbackpressureyieldasanexpectedcasehttps:github.comcamundazeebepull15508'></a>[Handle job worker back pressure/yield as an expected case](https://github.com/camunda/zeebe/pull/15508)

 Users previously observed job worker back pressure as an error state, which was logged heavily. Some users might have experienced slower than optimal performance when a job worker yielded under high load.
 Job worker back pressure was not correctly categorized in the system. The logging level was too high causing an overflow of logs, distracting attention from actual error states. The issue was due to the tight coupling of the gateway push-to-client logic with the &#x60;AggregatedClientStream&#x60; and &#x60;ClientStreamImpl&#x60; classes.
 The code was refactored to downgrade job worker back pressure from an error state to an expected state. Logs were downgraded to trace level, and the gateway&#x27;s push-to-client logic was separated from the &#x60;AggregatedClientStream&#x60; and &#x60;ClientStreamImpl&#x60; classes into its own class, &#x60;ClientStreamPusher&#x60;.
 Job worker back pressure is now tracked as an expected state rather than an error, enabling users to focus on actual error states. Less frequently occurring logs declutter the system, increasing its performance. New metric visualization aids in identifying when a worker is slower than the others in the same deployment, making it easier for users to diagnose issues with specific streams.
####  5.4.9. <a name='FixthecurrentESdashboardhttps:github.comcamundazeebepull15390'></a>[Fix the current ES dashboard](https://github.com/camunda/zeebe/pull/15390)

 The Elasticsearch (ES) dashboard was not functioning due to some defects. The external exporting feature was broken which severely affected the user experience.
 The failure was triggered by recent changes in the code that caused the ES dashboard to malfunction when exported for sharing externally. 
 We corrected this issue by restoring the earlier version of the dashboard and re-exporting it. This was achieved by importing the correct configuration of the dashboard from a valid template.
 The ES dashboard is now fully operational. Users can now export the dashboard externally without any issues, providing a smoothly functioning and improved user experience.
####  5.4.10. <a name='fix:setcorrectgenerationhttps:github.comcamundazeebepull15341'></a>[fix: set correct generation](https://github.com/camunda/zeebe/pull/15341)

Users previously observed that generations were not correctly set when using the system.
The issue was caused by the use of incorrect variables for reference within the system&#x27;s technical configuration.
The correct variables were identified and referenced appropriately to set generations as initially intended.
Now, as a user, you will observe that generations are set correctly in the system, preventing any further variable misalignments.
####  5.4.11. <a name='Calculatetherightversionshttps:github.comcamundazeebepull15340'></a>[Calculate the right versions](https://github.com/camunda/zeebe/pull/15340)

Users were unable to calculate the correct versions as this functionality was broken.
The version calculation feature was broken due to the absence of patch versions in the system.
The missing part responsible for version calculation was brought back and reinstated without major refactoring.
Users can now accurately calculate the version numbers using the reinstated functionality.
####  5.4.12. <a name='refactor:alloweasydisablingviasecretremovalhttps:github.comcamundazeebepull15317'></a>[refactor: allow easy disabling via secret removal](https://github.com/camunda/zeebe/pull/15317)

Users previously found it difficult to disable Transactional Consistency Control (TCC) when it was needed because the system design did not allow for an easy disabling mechanism.
The system architecture was originally set up in such a way that disabling TCC required a complex process, instead of simply removing a secret.
The system was refactored to implement a simplified approach where removing a secret quickly disables TCC.
Currently, users can effortlessly disable TCC whenever required by simply getting rid of the secret. This amendment enhances user control and the overall system flexibility.
####  5.4.13. <a name='Replaydeployedformshttps:github.comcamundazeebepull15201'></a>[Replay deployed forms](https://github.com/camunda/zeebe/pull/15201)

 Users were unable to replay deployed forms because Form records were not included in the supported Engine records previously. 
 The root cause of this problem was that the source code failed to include &#x27;Form&#x27; records in the set of supported records for playback in the Engine.
 Developers have refreshed the codebase to encompass &#x27;Form&#x27; records in the supported Engine records, hence enabling them to be replayed.
 Now users can efficiently replay deployed forms as &#x27;Form&#x27; records are included in the list of supported Engine records. A regression test case has been added to verify this behavior and ensure system robustness.
####  5.4.14. <a name='Aaupdateciafter8.3minorreleasehttps:github.comcamundazeebepull14631'></a>[Aa update ci after 8.3 minor release](https://github.com/camunda/zeebe/pull/14631)

The CI was outdated and not in sync after the 8.3 minor release, affecting the performance and stability of subsequent builds. 
This occurred because the CI was not updated after the 8.3 minor release, leaving it incompatible with the new release changes. 
The CI was updated comprehensively to match the 8.3 minor release standards, and refactored to ensure compatibility.
The CI is now up-to-date with the 8.3 minor release, and all builds are running smoothly and as expected.

####  5.4.15. <a name='fixclientsgo:clientdoesnotretryonpermanenterrorshttps:github.comcamundazeebepull14217'></a>[fix(clients/go): client does not retry on permanent errors](https://github.com/camunda/zeebe/pull/14217)

 Previously, the system did not stop on permanent errors regardless of the behavior of the credential provider. This made the client try to execute operations repetitively causing a waste of system resources. 
 The client was not configured correctly to distinguish between permanent errors and temporary errors. Permanent errors were not flagged as non-retryable, so the client kept on trying to execute the commands unnecessarily.
 Changes were made to ensure that commands stop on encountering permanent errors regardless of the behavior of the credential provider. Permanent errors were marked as non-retryable, while all other errors defaulted to the retry predicate. 
 Now, when a command encounters a permanent error, it immediately stops the operation avoiding unnecessary execution, and thus, functions more efficiently.

####  5.4.16. <a name='Backportstable1.2FixesflakinesswiththeElasticsearchExporterintegrationtestshttps:github.comcamundazeebepull8203'></a>[[Backport stable/1.2] Fixes flakiness with the ElasticsearchExporter integration tests](https://github.com/camunda/zeebe/pull/8203)

 Previously, users might have experienced flakiness while running ElasticsearchExporter integration tests. This interfered with accurate testing outcomes.
 The instability occurred due to a lack of synchronization between processes within the testing environment.
 We applied a backport of alteration #8194 to our &#x60;stable/1.2&#x60; branch, effectively resolving synchronization issues.
 Now, when users execute ElasticsearchExporter integration tests, they experience a stable, predictable testing process. Benefit from more reliable test results, contributing to a smoother and more efficient development workflow.
# Operate
##  6. <a name='OperateMisc'></a>Operate > Misc
###  6.1. <a name='OperateMiscBugfixes'></a>Operate > Misc > 💊 Bugfixes
####  6.1.1. <a name='fixbackend:ExtractIndexLifecycleManagementIT.GetridofArchiverITRepositoryhttps:github.comcamundaoperateissues6083'></a>[fix(backend): Extract IndexLifecycleManagementIT. Get rid of ArchiverITRepository](https://github.com/camunda/operate/issues/6083)

In the past, system integration was not optimal as the IndexLifecycleManagementIT and ArchiverITRepository components were not separate, causing inefficiency and potential confusion.
This situation occurred due to the IndexLifecycleManagementIT and ArchiverITRepository components being combined rather than separately addressed in the backend codebase.
We responded by extracting the IndexLifecycleManagementIT from the combination and got rid of ArchiverITRepository from the system&#x27;s backend.
Now, the system&#x27;s integration is more streamlined and efficient, making it easier for users to identify and manage the processes related to IndexLifecycleManagementIT; and the ArchiverITRepository component is no longer present, thus simplifying system management.
####  6.1.2. <a name='fixbackend:Removeunuseditemshttps:github.comcamundaoperateissues6078'></a>[fix(backend): Remove unused items](https://github.com/camunda/operate/issues/6078)

The backend tests included unused items, decluttering the tests and potentially causing confusion or misleading results.
During the process of coding, certain items remained in the tests that were no longer relevant or necessary. This was an oversight during the process of iterating and refining the product.
The unnecessary items were identified and systematically removed from all backend tests.
Now, the backend tests are more clear and concise. This ensures an optimized testing process and more reliable result interpretation.
####  6.1.3. <a name='fixbackend:Configurenumberofshardsperindex5920https:github.comcamundaoperateissues6065'></a>[fix(backend): Configure number of shards per index #5920](https://github.com/camunda/operate/issues/6065)

 Users were unable to configure the number of shards and replicas per index, leading to limitations in customizing their setup. 
 This was due to the absence of a feature in the backend to support per index shards and replicas configuration.
 Developers added support for per index shards and replicas configuration. This implementation expands the capabilities of the application.
 Users can now seamlessly configure the quantity of shards and replicas per index, granting enhanced control and customization over their setups.

####  6.1.4. <a name='fixbackend:Workaroundforsearch_afterissueinOSjavaclient5788https:github.comcamundaoperateissues6030'></a>[fix(backend): Workaround for search_after issue in OS java client (#5788)](https://github.com/camunda/operate/issues/6030)

Users experienced problems with the search_after function in the OS Java client due to the CamundaPatchedSearchRequest.
The issue was rooted in the technical engineering of the product. Specifically, the CamundaPatchedSearchRequest was a factor causing the function to fail.
A Map-based model replaced the CamundaPatchedSearchRequest.
Now, users should encounter no issues with the search_after function in the OS Java client. The swap to a Map-based model has rectified the underlying cause.
# Identity
##  7. <a name='IdentityMisc'></a>Identity > Misc
###  7.1. <a name='IdentityMiscNewFeatures'></a>Identity > Misc > 🚀 New Features
####  7.1.1. <a name='feat:allowmultiplerooturlshttps:github.comcamunda-cloudidentityissues2412'></a>[feat: allow multiple root urls](https://github.com/camunda-cloud/identity/issues/2412)

Prior to this fix, users were only able to define a single root URL in the KeycloakClient object, limiting the configuration options.
The root URL field in the KeycloakClient object was not designed to handle comma-separated values, thus not allowing multiple root URLs.
The code was modified to allow the root URL field on the KeycloakClient object to be interpreted as a comma-separated value field.
Users can now specify multiple root URLs in the KeycloakClient object, enabling more flexible configuration options.
####  7.1.2. <a name='feat:supportcustomclientidsforcamundaapplicationhttps:github.comcamunda-cloudidentityissues2406'></a>[feat: support custom client ids for camunda application](https://github.com/camunda-cloud/identity/issues/2406)


Users were unable to use custom client ids for Camunda applications as the Identities had only predefined client ids.
The application lacked the ability to map variable definitions the same way as it processes secrets.
We introduced a feature allowing the definition of custom client ID through environment variables. This covers all Camunda applications including Operate, Optimize, Tasklist, Connectors, Console, and Web-Modeler  
Result:
Now, users can define custom client IDs for all the Camunda applications, allowing for greater flexibility and customization. This change is also reflected in the updated documentation.
####  7.1.3. <a name='feat:addpingendpointforuptimecheckhttps:github.comcamunda-cloudidentityissues2380'></a>[feat: add /ping endpoint for uptime check](https://github.com/camunda-cloud/identity/issues/2380)

The system was not providing a way to check its uptime, which could decrease manageability and the ability to monitor system health.
The system hadn&#x27;t been initially designed with a specific endpoint for uptime checking and the built-in Spring endpoint could have introduced undesirable changes if not accurately handled.
A new /ping endpoint was added that returns a 2xx status and is accessible without authentication. This was implemented as a less complex and safer approach than modifying the health details and jwt filters.
The system now features a /ping endpoint allowing users to check its uptime without authentication, improving monitoring and control over system health. Changes in jwt filters weren&#x27;t needed, minimizing the risk of accidental over-exposure of data.
####  7.1.4. <a name='feat:providerhelperinsdkforauthorizationavailablehttps:github.comcamunda-cloudidentityissues2379'></a>[feat: provider helper in sdk for authorization available](https://github.com/camunda-cloud/identity/issues/2379)

In the past, users were unable to determine if authorization through identity was available or not in the SDK, leading to uncertainty when configuring Connectors.
The issue arose due to the lack of a helper method in the SDK to indicate the availability of authorization through identity.
Developers added a helper method in the SDK to show if authorization via identity is available. This method will ascertain if Connectors have been set up with new Identity configuration variables, superseding the built-in authentication handling mechanism in the Operate SDK.
Users can now check if authorization through identity is accessible directly from the SDK, streamlining the configuration process for Connectors.
####  7.1.5. <a name='feat:addahelpertodetermineidentityusersearchavailabilityhttps:github.comcamunda-cloudidentityissues2356'></a>[feat: add a helper to determine identity user search availability](https://github.com/camunda-cloud/identity/issues/2356)

Previously, the user search feature in the Optimize UI appeared even when this feature was not supported by the underlying system configuration. This could result in confusion or an inconsistent user experience. 
The application did not have a mechanism to determine the availability of the user search feature based on Identity&#x27;s configurations. Besides that, the system didn&#x27;t check for null or empty baseUrl, which could lead to process failures. 
We have added a helper function that checks whether user search is available, taking into consideration the Identity configuration type and the baseUrl. This helper allows the app to detect the operational status of the user search feature. 
Currently, if user search is not available due to Identity configuration restrictions, the related UI elements are hidden in the Optimize interface. This ensures a more consistent and error-free user experience.
####  7.1.6. <a name='feat:implementgenericauthproilehttps:github.comcamunda-cloudidentityissues2327'></a>[feat: implement generic auth proile](https://github.com/camunda-cloud/identity/issues/2327)

 
Previously, users were unable to use authentication connections that were not covered by the platform specific implementations.
 
The system was primarily designed to only support Keycloak and AzureAD implementations, and lacked detailed &#x60;GENERIC&#x60; authentication type catering to custom connections.
 
A &#x60;GENERIC&#x60; authentication type was introduced where we incorporated well-known configuration retrieval, enabling connections not covered by specific platform implementations. Further, we also revamped the Keycloak and AzureAD implementations to leverage this generic profile, thereby significantly reducing code duplication.
 
Now, users can enjoy smooth and successful connections that may not be encompassed by our platform-specific implementations. Through our generic implementation and the newly incorporated well-known configuration retrieval, the system can support a broader range of connections.
####  7.1.7. <a name='feat:exposeusergroupsviaSDKhttps:github.comcamunda-cloudidentityissues2303'></a>[feat: expose user groups via SDK](https://github.com/camunda-cloud/identity/issues/2303)

Previously, users couldn&#x27;t see the groups they belonged to via the SDK when using the self-manage feature for Tasklist. This lack of visibility made it difficult for them to gauge their access and permissions.
This issue was due to the absence of a mapper in the system that could extract and expose user groups as part of the user details linked to a token.
The engineering team developed and implemented a new mapper to specifically address this missing functionality. Furthermore, the associated user data was exposed as outlined in the parent issue.
Now, users can view the groups they are assigned to within the Tasklist self-manage offering. The system seamlessly surfaces this information in user details connected to a token.
####  7.1.8. <a name='feat:addread:userspermissiontotheOptimizerolehttps:github.comcamunda-cloudidentityissues2296'></a>[feat: add read:users permission to the Optimize role](https://github.com/camunda-cloud/identity/issues/2296)

Previously, users with the Optimize role were unable to access user details due to a lack of necessary permissions. 
This issue was triggered because the &#x60;read:users&#x60; permission was not included in the Optimize role&#x27;s configuration.
The &#x60;read:users&#x60; permission has been duly added to the Optimize role.
Now, users assigned the Optimize role are able to access and read user details.
####  7.1.9. <a name='feat:implementAzureADsdkprofilehttps:github.comcamunda-cloudidentityissues2273'></a>[feat: implement Azure AD sdk profile](https://github.com/camunda-cloud/identity/issues/2273)

Users were unable to authenticate using Azure AD as it was not supported in previous releases.
The underlying platform had not integrated Azure AD SDK, hence it lacked the necessary functionality for Azure AD authentication.
We implemented the Azure AD SDK profile, created a new set of classes dedicated to Azure AD authentication, and adjusted the &#x60;AbstractAuthentication&#x60; class to make the &#x60;preferred_username&#x60; claim name configurable.
Users can now authenticate using Azure AD in the current release. Uniquely configured preferred_username claims are also catered for, enhancing user flexibility and platform versatility.
####  7.1.10. <a name='feat:addsupportforAWSAuroradatabasehttps:github.comcamunda-cloudidentityissues2266'></a>[feat: add support for AWS Aurora database](https://github.com/camunda-cloud/identity/issues/2266)

 
Users were previously unable to connect to an AWS Aurora database using the software, due to inadequate support for such operations in the codebase.
 
The software lacked the necessary code changes needed to connect to an AWS Aurora database using the AWS-advanced-jdbc-wrapper with IAM plugin, preventing users from establishing successful connections.
 
Code was modified to add the necessary support, notably incorporating elements from the solutions provided by the Web Modeler team. The changes involved using the AWS-advanced-jdbc-wrapper with IAM plugin to establish the connection to AWS Aurora database.
 
Users can now successfully connect to an AWS Aurora database using the software. The system resolves the appropriate &#x27;spring.datasource.driver-class-name&#x27; placeholder correctly, and the resultant operation of connection to the AWS Aurora database is covered by tests to ensure stability and reliability. However, users should note that, due to a new medium-level vulnerability CVE-2023-4586 introduced by the new AWS libraries, proper certificate validation should be manually enabled in the code to avoid Man-in-the-Middle attacks.
####  7.1.11. <a name='feat:implementidentityspringbootstarterhttps:github.comcamunda-cloudidentityissues2184'></a>[feat: implement identity spring boot starter](https://github.com/camunda-cloud/identity/issues/2184)

 Previously, users lacked the basic foundation for the new Identity Spring Boot Starter. The separate variable prefix caused a disjointed, chaotic experience for users manipulating environment variables.
 The issue was generated due to the absence of an Identity Spring Boot Starter. This unattended gap in the ecosystem resulted in inefficiencies and limited integration options. Additionally, the arbitrary naming of variable prefixes amplified the confusion.
 A new Identity Spring Boot Starter has been implemented. Attention was given to the improvement of the variable prefix system and has been updated to &#x27;camunda.identity&#x27;. This new approach aligns better with existing components and provides enhanced context.
 Now, users have access to the new Identity Spring Boot Starter which has an improved variable prefix system. This feature offers better integration options and a more streamlined, user-friendly experience by adopting a unified and intuitive naming convention. Environment variables such as &#x27;CAMUNDA_IDENTITY_BASEURL&#x27; provide additional context, leading to a more graspable user experience.
####  7.1.12. <a name='feat:addimplementationinfotoSDKjarhttps:github.comcamunda-cloudidentityissues2148'></a>[feat: add implementation info to SDK jar](https://github.com/camunda-cloud/identity/issues/2148)

Previously, the implementation information was not accessible inside the MANIFEST.MF of the jar, making it difficult to fetch the Identity version in the dependent projects during runtime. This situation was particularly problematic during E2E testing in Zeebe, causing problems when dealing with Identity SNAPSHOTs and supporting older versions.
The SDK was not initially designed to provide implementation info, and consequently, the Identity version could not be retrieved during runtime in dependent projects.
The code was altered to include the implementation info in the MANIFEST.MF of the jar in the SDK. This information allows dependent projects to fetch the Identity version during runtime.
Now, the Identity version can be readily identified during runtime in dependent projects, including for Docker images in E2E tests. This change enhances compatibility and fault tolerance when dealing with Identity SNAPSHOTs and older versions.
####  7.1.13. <a name='feat:supportinitializingaccessrulesbyconfighttps:github.comcamunda-cloudidentityissues2161'></a>[feat: support initializing access rules by config](https://github.com/camunda-cloud/identity/issues/2161)

Earlier, users were unable to assign members to tenants through configuration, causing inconvenience to internal teams and consumers trying to automate tasks. It was also possible that the &quot;default&quot; tenant could be overwritten and removed, resulting in an inconsistent state.
The issue arose due to the lack of initializer updates that would support the assignment of members to tenants via configuration. Also, the &quot;default&quot; tenant definition was not in a secure location, making it susceptible to overwriting and removal.
Changes have been made to introduce initializer updates, enabling the assignment of members to tenants through configuration. Additionally, the &quot;default&quot; tenant definition has been moved to a new section, &quot;identity.environment&quot;, to prevent it from being overwritten and removed.
Now, users can assign members to tenants via configuration seamlessly, enhancing automation capabilities. Furthermore, the &quot;default&quot; tenant will always exist in the environment, ensuring a consistent state.
####  7.1.14. <a name='feat:implementGETauthorizationsendpointhttps:github.comcamunda-cloudidentityissues2109'></a>[feat: implement GET /authorizations endpoint](https://github.com/camunda-cloud/identity/issues/2109)

 Users with specific permissions were unable to access the authorization data of an organization due to an issue in the SDK where the &#x27;permissions&#x27; claim on JWTs from Auth0 was being overlooked.
 The issue was caused by the SDK overlooking the &#x27;permissions&#x27; claim on JWTs from Auth0 because of audience reasons. On a similar note, the Keycloak system was returning a Null Pointer Exception (NPE) rather than an empty list when tokens structuring was invalid.
 The SDK and Keycloak implementations were tweaked to handle permissions properly. The &#x27;permissions&#x27; claim on the JWTs is now recognized by the SDK, and the Keycloak implementation has been altered to return an empty list instead of an NPE when encountering an invalid token structure.
 Users with requisite permissions can now successfully access the authorization data for an organization. This first step towards a broader feature rollout significantly improves user experience by eliminating previous technical constraints.
###  7.2. <a name='IdentityMiscBugfixes'></a>Identity > Misc > 💊 Bugfixes
####  7.2.1. <a name='fix:fixresourceauthorizationscheckboxstylehttps:github.comcamunda-cloudidentityissues2343'></a>[fix: fix resource authorizations checkbox style](https://github.com/camunda-cloud/identity/issues/2343)

Users were experiencing incorrect styling of the resource permissions checkboxes in Identity.
The issue was caused by a bug in the CSS that dictates the visual representation of these checkboxes, which resulted in inconsistencies and reduced usability. 
The styles associated with the resource permissions checkboxes were adjusted to ensure they display properly in all supported environments and browsers. 
The resource permissions checkboxes in Identity now display correctly, providing users with a more consistent experience when managing permissions.
####  7.2.2. <a name='fix:upgradeorg.springframework.boot:spring-boot-starter-securityfrom3.1.5to3.2.0https:github.comcamunda-cloudidentityissues2381'></a>[fix: upgrade org.springframework.boot:spring-boot-starter-security from 3.1.5 to 3.2.0](https://github.com/camunda-cloud/identity/issues/2381)

 Prior to this fix, users could have potentially experienced a Denial of Service (DoS) attack due to a vulnerability in the security features of our system.
 The problem was that the &#x60;org.springframework.boot:spring-boot-starter-security&#x60; was outdated (version 3.1.5).
 The issue was resolved by updating the &#x60;org.springframework.boot:spring-boot-starter-security&#x60; dependency from version 3.1.5 to 3.2.0, and also the &#x60;org.springframework.boot:spring-boot-starter-web&#x60; from 3.1.5 to 3.1.6.
 The system is now more secure with the new updates and users are no longer exposed to the DoS attack through the mentioned vulnerability. These changes maintain system stability without disruption to user experience.
####  7.2.3. <a name='fix:updateaws-java-sdk-v2monorepotov2.21.29mainhttps:github.comcamunda-cloudidentityissues2353'></a>[fix: update aws-java-sdk-v2 monorepo to v2.21.29 (main)](https://github.com/camunda-cloud/identity/issues/2353)

 The system was using an outdated version of aws-java-sdk-v2 (v2.21.28), affecting the operation and compatibility with newer versions of AWS services like STS and RDS.
 The issue was caused by the continuous integration system not having been set up to automatically update the aws-java-sdk-v2 from v2.21.28 to the latest version, v2.21.29.
 The problem was fixed by updating the aws-java-sdk-v2 monorepo to v2.21.29. Both the STS and RDS services were successfully updated to the newer version.
 The system now operates with the latest version of aws-java-sdk-v2 (v2.21.29). This provides enhanced compatibility with AWS services like STS and RDS, improving stability and overall runtime efficiency.
####  7.2.4. <a name='fix:updateaws-java-sdk-v2monorepomainhttps:github.comcamunda-cloudidentityissues2350'></a>[fix: update aws-java-sdk-v2 monorepo (main)](https://github.com/camunda-cloud/identity/issues/2350)

Users were running outdated versions of various Amazon Web Service&#x27;s Java SDK v2 packages, including &#x27;sts&#x27;, &#x27;rds&#x27;, and &#x27;bom&#x27;. These outdated versions may expose the system to vulnerabilities and prevent the utilisation of updated features. 
The system was using deprecated versions of several AWS Java SDK v2 packages (sts 2.21.26, rds 2.21.26, bom 2.21.26). The adoption and confidence in these outdated packages were evidently low, posing potential risks for system integrity.
Updated the aws-java-sdk-v2 monorepository to incorporate the latest versions of several packages. Software.amazon.awssdk:sts was updated from 2.21.26 to 2.21.29, software.amazon.awssdk:rds from 2.21.26 to 2.21.29, and software.amazon.awssdk:bom from 2.21.26 to 2.21.28.
Users are now operating on the most recent versions of software.amazon.awssdk:sts, rds, and bom. This ensures that they benefit from the most recent updates, features and security patches, plus the highest level of adoption and confidence in these packages.
####  7.2.5. <a name='fix:upgradesoftware.amazon.awssdk:rdsfrom2.21.21to2.21.26https:github.comcamunda-cloudidentityissues2332'></a>[fix: upgrade software.amazon.awssdk:rds from 2.21.21 to 2.21.26](https://github.com/camunda-cloud/identity/issues/2332)

 The older version of &#x60;software.amazon.awssdk:rds&#x60; (2.21.21) was in use, which led to an instance of improper certificate validation, posing as a significant vulnerability.
 &#x60;software.amazon.awssdk:rds&#x60; in its iteration of 2.21.21 version contained an identified vulnerability (SNYK-JAVA-IONETTY-1042268) associated with improper certificate validation.
 The issue was resolved by upgrading &#x60;software.amazon.awssdk:rds&#x60; from version 2.21.21 to its secured counterpart, version 2.21.26 as per the recommendation of Snyk. 
 With the application of this fix, the system now uses the updated &#x60;software.amazon.awssdk:rds&#x60; package (2.21.26), effectively eliminating the previously identified vulnerability. This ensures the correct validation of certificates, enhancing the overall security of the system.
####  7.2.6. <a name='fix:updateaws-java-sdk-v2monorepotov2.21.21mainhttps:github.comcamunda-cloudidentityissues2312'></a>[fix: update aws-java-sdk-v2 monorepo to v2.21.21 (main)](https://github.com/camunda-cloud/identity/issues/2312)

Users experienced an outdated version of AWS Java SDK v2, thus, potentially running into discrepancies, incompatibilities, or missing out on recent improvements provided by the newer version. 
The software depended on an older version of the AWS Java SDK v2 (v2.21.20). 
The AWS Java SDK v2 was updated from v2.21.20 to v2.21.21 for the software.amazon.awssdk:sts, software.amazon.awssdk:rds, and software.amazon.awssdk:bom packages.
Users now interact with the system employing the updated AWS Java SDK v2.21.21, which offers a more up-to-date, secure, and stable environment, ensuring maximum compatibility and taking advantage of the latest features from AWS.
####  7.2.7. <a name='fix:updateaws-java-sdk-v2monorepotov2.21.20mainhttps:github.comcamunda-cloudidentityissues2307'></a>[fix: update aws-java-sdk-v2 monorepo to v2.21.20 (main)](https://github.com/camunda-cloud/identity/issues/2307)

Users experienced outdated dependencies while using the application, particularly those related to AWS Java SDK v2, as it ran on version 2.21.17.
 
The issue was caused by the application&#x27;s software packages, specifically software.amazon.awssdk:sts, software.amazon.awssdk:rds, and software.amazon.awssdk:bom, being linked to an older version of the AWS Java SDK v2.
The AWS Java SDK v2 dependencies in the application were updated to the latest version, 2.21.20.
The application now operates with the most recent version of the AWS Java SDK v2 (2.21.20). This effectively updates the dependencies, improving overall system reliability and performance.
####  7.2.8. <a name='fix:updateaws-java-sdk-v2monorepotov2.21.17mainhttps:github.comcamunda-cloudidentityissues2300'></a>[fix: update aws-java-sdk-v2 monorepo to v2.21.17 (main)](https://github.com/camunda-cloud/identity/issues/2300)


Previously, the application was using an outdated version (v2.21.15) of the aws-java-sdk, which might have caused issues with some functionality related to the software.amazon.awssdk:rds, software.amazon.awssdk:sts and the software.amazon.awssdk:bom packages.
The issue was caused due to the use of an outdated AWS Java SDK version. The versions of sts, rds, and bom components of the AWS Java SDK were all at v2.21.15. 
The AWS Java SDK version was updated to v2.21.17 for the sts, rds, and bom components. This was achieved by merging the relevant pull request, which upgraded the monorepo to v2.21.17 from v2.21.15.
With this fix, the application now uses the updated v2.21.17 version of the AWS Java SDK. Consequently, the app now benefits from the help of improvements, enhancements, and bug fixes released in the v2.21.17 version.
####  7.2.9. <a name='fix:updatec4-identitytofixmultipletenantsassignmenthttps:github.comcamunda-cloudidentityissues2213'></a>[fix: update c4-identity to fix multiple tenants assignment](https://github.com/camunda-cloud/identity/issues/2213)

 Previously, users experienced an issue where multiple tenants were being assigned to a single entity. 
 This occured due to a glitch in the &#x60;c4-identity&#x60; library that incorrectly allowed for multi-tenant assignment.
 We&#x27;ve resolved the issue by upgrading the &#x60;c4-identity&#x60; library which included a necessary fix to prevent multiple tenants from being assigned to a single entity. 
 Now, the system properly assigns tenants to entities with each entity having a unique tenant. This improvement is implemented and active in the latest version.
####  7.2.10. <a name='fix:upgradesoftware.amazon.awssdk:rdsfrom2.21.13to2.21.15https:github.comcamunda-cloudidentityissues2274'></a>[fix: upgrade software.amazon.awssdk:rds from 2.21.13 to 2.21.15](https://github.com/camunda-cloud/identity/issues/2274)

 Users may have experienced invalid or untrustworthy certificates due to improper certificate validation from the vulnerability of the software.amazon.awssdk:rds version 2.21.13 in the management-api.
 The triggered issue stemmed from a flawed version of software.amazon.awssdk:rds (2.21.13), which had issues with certificate validation. The vulnerability had severity rated as medium, potentially disrupting the secure function of the software.
 The issue was addressed by upgrading software.amazon.awssdk:rds from version 2.21.13 to version 2.21.15. The changes were executed in the maven dependencies within the file - management-api/pom.xml, to deploy the fixed version of the package.
 Now, software robustness is reinforced with the upgrade, and users have reduced risk from an unsecured certificate, hence ensuring a more secure experience. Unsafe certificate validation is no longer an issue with software.amazon.awssdk:rds version 2.21.15.
####  7.2.11. <a name='fix:dependencyissuescausingteststonotrunhttps:github.comcamunda-cloudidentityissues2268'></a>[fix: dependency issues causing tests to not run](https://github.com/camunda-cloud/identity/issues/2268)

 Previously, users were unable to execute tests due to dependency issues.
 This was caused by a clash of dependency versions for the Junit Jupiter artifacts. The use of a &#x60;dependencyManagement&#x60; block to set the versions was not successful.
 Two solutions were applied. First, the Jupiter versions were set to a version that works. Second, the Maven failsafe plugin was configured to fail the build if no tests were run during the verify stage for the management-api artifact.
 Now, users can successfully run tests. The build fails as expected if no tests are run during the validation phase in the &#x60;management-api&#x60; module, adding an extra layer of protection. Maven is now allowed to use its built-in logic for dependency resolution.
####  7.2.12. <a name='fix:fixaccessrulesretrievalhttps:github.comcamunda-cloudidentityissues2265'></a>[fix: fix access rules retrieval](https://github.com/camunda-cloud/identity/issues/2265)

Previously, users were unable to retrieve access rules if they were not linked to at least one tenant, even when an access rule existed
This problem was due to the use of a normal &quot;JOIN tenants&quot; when retrieving access rules instead of &quot;LEFT JOIN tenants&quot;
We have adjusted the technical logic by replacing &quot;JOIN tenants&quot; with &quot;LEFT JOIN tenants&quot; in the access rules retrieval process
Currently, users can successfully retrieve existing access rules even if they are not associated with any tenant.
####  7.2.13. <a name='fix:updatespringboottov3.1.5mainhttps:github.comcamunda-cloudidentityissues2227'></a>[fix: update spring boot to v3.1.5 (main)](https://github.com/camunda-cloud/identity/issues/2227)

 Before this fix, the application was running on an older version (3.1.4) of the Spring Boot framework.
 Regular updates are crucial for the application to function optimally and securely. The previous version of Spring Boot had some noted bugs and deficiencies that could have affected the application&#x27;s performance.
 The application dependencies were updated from Spring Boot version 3.1.4 to version 3.1.5. This upgrade encompasses simultaneous enhancements to the &#x27;spring-boot-starter&#x27;, &#x27;spring-boot-configuration-processor&#x27;, &#x27;spring-boot-autoconfigure&#x27;, and &#x27;spring-boot&#x27; packages.
 With these updates now applied, the application operates on a much more stable and secure version of Spring Boot. Consequently, all improvements and bug-fixes wrapped into version 3.1.5 of Spring Boot are now a part of the application, optimizing its functionality.
####  7.2.14. <a name='fix:usejava17tobuildnewartifactshttps:github.comcamunda-cloudidentityissues2225'></a>[fix: use java 17 to build new artifacts](https://github.com/camunda-cloud/identity/issues/2225)

Previously, artifact deployment for the &#x60;-starter&#x60; and &#x60;-autoconfigure&#x60; failed due to an incompatibility with Java 11. 
The root cause of the issue was the use of Java 11 for executing these steps, which was not compatible with the required Java 17.
The solution to this issue was to update the environment to build new artifacts using Java 17 instead of Java 11.
Now, the &#x60;-starter&#x60; and &#x60;-autoconfigure&#x60; artifacts correctly deploy due to the compatibility with Java 17.
####  7.2.15. <a name='fix:upgradeorg.springframework.boot:spring-boot-starter-webfrom3.1.4to3.1.5https:github.comcamunda-cloudidentityissues2191'></a>[fix: upgrade org.springframework.boot:spring-boot-starter-web from 3.1.4 to 3.1.5](https://github.com/camunda-cloud/identity/issues/2191)

Previously, users were experiencing a range of security vulnerabilities when utilizing the application due to outdated dependencies. Concerns included denial of service (DoS) attacks, improper input validation, incomplete cleanup, and arbitrary code execution. 
The cause of these vulnerabilities was the use of the 3.1.4 version of org.springframework.boot:spring-boot-starter-web. This version had previously identified vulnerabilities that left the system open to possible breaches. 
To remedy these vulnerabilities, we upgraded the org.springframework.boot:spring-boot-starter-web from version 3.1.4 to 3.1.5 in the management-api/pom.xml file. 
Users can now utilize the application with improved security measures in place. The upgrade to the org.springframework.boot:spring-boot-starter-web dependency to version 3.1.5 has mitigated the prior identified vulnerabilities, leading to fewer opportunities for breaches and a safer user experience.
####  7.2.16. <a name='fix:resolvelazyloadingissuewithtenantslinkedtoaccessruleshttps:github.comcamunda-cloudidentityissues2180'></a>[fix: resolve lazy loading issue with tenants linked to access rules](https://github.com/camunda-cloud/identity/issues/2180)

 Users previously encountered an exception when attempting to assign members in configuration for tenants. This was due to a &#x60;LazyInitializationException&#x60; from Hibernate which prevented the successful initialization of a collection of role: &#x60;io.camunda.identity.entity.AccessRule.tenants&#x60;.
 The exception occurred because the code failed to retrieve the tenants for the access rule that we want to assign a member to. This issue arose from the Hibernate session extending and causing a disruption in the process.
 The issue was corrected by implementing the &#x60;JOIN FETCH&#x60; approach. This decision was made after evaluating various options to resolve the &#x60;LazyInitializationException&#x60;. Using &#x60;FetchType.EAGER&#x60; was avoided due to the general discouragement in its usage.
 Users can now successfully assign members in configuration for tenants without facing any exceptions. This fix has enhanced the fluidity of the configuration process, improving overall user experience.
####  7.2.17. <a name='fix:fixfor2vulnerabilitieshttps:github.comcamunda-cloudidentityissues2133'></a>[fix: fix for 2 vulnerabilities](https://github.com/camunda-cloud/identity/issues/2133)

 Previously, users could potentially be exposed to two security vulnerabilities, Access Restriction Bypass and Incorrect Permission Assignment for Critical Resource, which posed a risk to the security of the software.
 These vulnerabilities occurred because of outdated packages in the Maven dependencies of the project, specifically &#x60;org.springframework.boot:spring-boot-starter-web:&#x60; and &#x60;org.springframework.boot:spring-boot-starter-security:&#x60; versions 3.1.3.
 We have upgraded these vulnerable dependencies to a secure version, 3.1.4, as reflected in the changes to the management-api/pom.xml file.
 Now, the system is secure against the mentioned vulnerabilities, significantly reducing the potential security risks to our users. Users can now leverage the functionalities of the software while being assured of their security.
####  7.2.18. <a name='fix:onlycreatelogfilewhenrequiredhttps:github.comcamunda-cloudidentityissues2164'></a>[fix: only create log file when required](https://github.com/camunda-cloud/identity/issues/2164)

 Previously, the Log4J2 system was creating a log file prematurely, even when it was not required. 
 In the past, the software&#x27;s configuration was set for Log4J2 to proactively create the logfile, which caused unintended results for users. 
 The issue was resolved by modifying the configuration settings and toggling off the feature that allowed for proactive file creation. 
 Now, the system only generates log files when necessary, thus enhancing user experience and system performance.
####  7.2.19. <a name='fix:preventbodyonGETcallinserviceWorkerhttps:github.comcamunda-cloudidentityissues2153'></a>[fix: prevent body on GET call in serviceWorker](https://github.com/camunda-cloud/identity/issues/2153)

Previously, the &#x60;/tenants&#x60; page failed to load, inhibiting smooth user experience.
This occurred because the serviceWorker was setting a body for &#x60;GET&#x60; calls, which was causing the error.
A modification in logic was implemented to prevent the serviceWorker from setting a body for &#x60;GET&#x60; calls. 
With this fix, the &#x60;/tenants&#x60; page now loads successfully.
