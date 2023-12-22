# Release Notes for Camunda 8.4.0-alpha2

# Zeebe
## Zeebe > Java Client
### Zeebe > Java Client > Enhancements
#### [Provide the Java client&#x27;s interfaces for migrating a process instance](https://github.com/camunda/zeebe/issues/15161)

Previously, users of the Java client were not able to migrate process instances through the API.
The interfaces allowing this action were not yet fully implemented in the Java client, leading to limitations in development opportunities.
To expedite the process, the interfaces of the Java client were provided without full implementation. This strategic approach was aimed at quickly unlocking further Operate development.
Now, despite not having a fully implemented system, users can develop against these interfaces—facilitating process instance migration via the Java client&#x27;s API.

#### [Support migrating a process instance from the Java client](https://github.com/camunda/zeebe/issues/14921)

Previously, users of the Java client couldn&#x27;t migrate process instances through the API. The Java client also lacked an interface for migrating a process instance, which limited its functionality.
This was because the Java client was not initially designed with migration capabilities in mind.
We implemented the ability for the Java client to migrate process instances through the API. This entailed the creation of new Java client interfaces specifically designed for migrating a process instance.
Now, users can easily migrate process instances using the Java client. They can also reuse a migration plan for migrating several process instances. Through the newly added interfaces, migration capabilities are significantly enhanced and user flexibility is increased.
## Zeebe > Go Client
### Zeebe > Go Client > Enhancements
#### [Go client commands allow specifying a &#x60;tenantId&#x60; / &#x60;tenantIds&#x60; property](https://github.com/camunda/zeebe/issues/15153)

Prior to this fix, the Zeebe Go client did not support multi-tenancy, preventing users from specifying a &#x60;tenantId&#x60; or &#x60;tenantIds&#x60; for certain command operations.
This issue arose because the following commands lacked a method to set a &#x60;tenantId&#x60;: &#x60;DeployResource&#x60;, &#x60;CreateProcessInstance&#x60;, &#x60;PublishMessage&#x60;, &#x60;BroadcastSignal&#x60;, &#x60;EvaluateDecision&#x60;. Additionally, the &#x60;ActivateJobs&#x60; command lacked a method to set &#x60;tenantIds&#x60;.
We updated the Go client code to include methods that allow the setting of &#x60;tenantId&#x60; and &#x60;tenantIds&#x60; in the command operations listed above.
With this fix, users are now able to assign a &#x60;tenantId&#x60; to &#x60;DeployResource&#x60;, &#x60;CreateProcessInstance&#x60;, &#x60;PublishMessage&#x60;, &#x60;BroadcastSignal&#x60; and &#x60;EvaluateDecision&#x60; commands. For &#x60;ActivateJobs&#x60; command, users can assign &#x60;tenantIds&#x60;. This allows the Zeebe Go client to effectively support multi-tenancy.
#### [Add multi-tenancy support in the Zeebe Go client](https://github.com/camunda/zeebe/issues/14477)

Earlier, Zeebe Go client could not support multi-tenancy, which limited its functionality and usability for users who needed to run multiple instances with tenant isolation.
This issue was caused by the lack of implemented support for multi-tenancy in the initial Zeebe Go client codebase.
Efforts to implement multi-tenancy support in the Zeebe Go client were initiated, however, they were de-prioritized, and the task was put back to the backlog.
Currently, multi-tenancy support in Zeebe Go client is not implemented yet, and there is no clear timeline when this functionality will be picked up again.
#### [go-client: Job worker polling backoff mechanism](https://github.com/camunda/zeebe/issues/6150)

 
In the past, any time an error was received from the gateway by the job worker in the Go client, there was no delay mechanism for subsequent pollings for available jobs. This lack of backoff strategy could lead to excessive load, especially during high-error periods.
 
Previous iterations of the Go client didn’t include a backoff mechanism like the one in the Java client. This mechanism is essential to reduce strain on the system because it delays the worker&#x27;s next poll for available jobs upon receiving an error from the gateway.
 
A default exponential backoff mechanism was added to the Go client, mirroring the Java client&#x27;s approach. This new functionality includes customizable settings for maxDelay, minDelay, backoffFactor, and jitterFactor, and the capacity for users to provide their own implementation of a backoff strategy. 
 
With the fix in place, when the job poller in the Go client encounters an error, it will now implement a delay before polling for available jobs again. This delay increases exponentially with each error to a maximum delay limit, effectively reducing strain when errors occur. Users can customize backoff parameters or provide their own strategy for increased flexibility and optimization.
## Zeebe > Misc
### Zeebe > Misc > Enhancements
#### [Allow setting &#x60;scope&#x60; parameter for OAuth2 authentication](https://github.com/camunda/zeebe/issues/15391)

Users were unable to authenticate using Microsoft Entra ID (Azure AD) and generic OpenID Connect because the Zeebe Java client didn&#x27;t support setting the &#x60;scope&#x60; parameter in the token request, limiting login alternatives. 
The Zeebe Java client did not initially include functionality to set the &#x60;scope&#x60; parameter, this was an oversight during the development phase of the client. 
The Zeebe Java client was updated to support setting the &#x60;scope&#x60; parameter in the token request, extending its OAuth2 authentication compatibility. 
Users can now authenticate using their Microsoft Entra ID (Azure AD) and generic OpenID Connect, providing a wider variety of login options.
#### [Configure &#x60;identity-sdk&#x60; through &#x60;identity-spring-boot-starter&#x60; in the Gateway](https://github.com/camunda/zeebe/issues/15389)

Previously, every time Identity added new configuration properties, they had to be added to Zeebe, creating dependencies and unnecessary repetition.
This was caused by the identity configuration properties being directly linked with Zeebe configuration classes. There was no specific mechanism to decouple these two components, leading to increased complexity in maintaining and updating the system.
Several modifications were made to implement and integrate the &#x60;identity-spring-boot-starter&#x60; to decouple Identity configuration properties from Zeebe. This includes autowiring of an &#x60;IdentityConfiguration&#x60; bean in the &#x60;StandaloneGateway&#x60; class and passing it to the &#x60;Gateway&#x60; constructor, and modifying the &#x60;MultiTenancyOverIdentityIT&#x60; test to configure Identity using an &#x60;IdentityConfiguration&#x60; bean.
Zeebe no longer needs to update every time Identity adds new configuration properties. The identity configuration is now managed independently through the &#x60;identity-spring-boot-starter&#x60;, providing a leaner and cleaner system configuration mechanism.
#### [Add integration test to &#x60;MultiTenancyOverIdentityIT&#x60; test](https://github.com/camunda/zeebe/issues/15382)

Previously, the &#x60;MultiTenancyOverIdentityIT&#x60; test suite had inadequate coverage, leading to potential obscure bugs and unexpected behaviour in a multi-tenancy setting. 
The reason for this issue was the absence of necessary integration tests in the &#x60;MultiTenancyOverIdentityIT&#x60; test suite. 
Comprehensive integration tests were added to the &#x60;MultiTenancyOverIdentityIT&#x60; test. An example test case &#x60;shouldCompleteJobForTenant&#x60; was provided for further reference.
Now, the &#x60;MultiTenancyOverIdentityIT&#x60; test suite covers more scenarios, ensuring reliable and predictable behavior across different tenants.
#### [Support ElasticSearch 8.9+](https://github.com/camunda/zeebe/issues/15306)

The system was unable to support ElasticSearch versions 8.9 and above, prohibiting users from leveraging the latest features, bug fixes, and resolving CVEs that came with the newer ElasticSearch versions.
The incompatibility was due to outdated ElasticSearch dependencies in Zeebe&#x27;s codebase, which was not configured to automatically update for the ElasticSearch client.
The development team manually updated Zeebe&#x27;s ElasticSearch dependencies to version 8.9+. Additionally, the dependencies in zeebe-analytics were also updated. These updates were then thoroughly validated through a series of successful test runs.
Zeebe now supports ElasticSearch 8.9 and above, allowing users to benefit from the latest improvements and enhancements included in these versions. Users should be able to upgrade their ElasticSearch instances without encountering compatibility issues.
#### [Update &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files in order to allow user to disable form exporting](https://github.com/camunda/zeebe/issues/15193)

Users were unable to disable form exporting from the &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files.
The necessary option to disable form exporting was not present in these template files previously.
We updated the &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files to include the option for users to disable form exporting.
Users can now disable form exporting in both &#x60;broker.yaml.template&#x60; and &#x60;broker.standalone.yaml.template&#x60; files.
#### [Export compensation subscription events](https://github.com/camunda/zeebe/issues/15140)

 Previously, BPMN compensation events did not have a compensation record exported to Elasticsearch and OpenSearch.
 The issue was due to the lack of implementation of the record in the exporters, following the steps indicated in the development guide.
 We resolved the problem by adding the record for the exporters as mentioned in the development guide, through Pull request (https://github.com/camunda/zeebe/pull/15392).
 Now, compensation events can be efficiently tracked because these events are properly exported to Elasticsearch and OpenSearch.
#### [Migrate task instances with variables](https://github.com/camunda/zeebe/issues/15114)

 Users were unable to migrate task instances that had associated variables.
 The feature to update the properties of variables during the process migration was absent in the system, resulting in the element IDs of variable instances being unchangeable.
 We introduced a new &#x60;VariableIntent&#x60; &#x60;MIGRATED&#x60; and created an event applier that updates specific properties of a variable. In the &#x60;ProcessInstanceMigration&#x60; command processor, we set up appending &#x27;Variable: MIGRATED&#x27; event for each variable of a process instance and for each variable at the child element instance scope. We also cleared the variable&#x27;s &#x60;value&#x60; during these events to avoid exceeding the result records batch size. 
 Users can now successfully migrate a process instance and utilize the variables in activated jobs. They can also update these variables with the Set Variables RPC.
#### [Migrate service task instances (including jobs)](https://github.com/camunda/zeebe/issues/15113)

 Previously, during process instance migration, service task instances and their related jobs could not be properly migrated. Consequently, users were unable to perform job commands (e.g., activate, fail, throwError, yield, complete, etc.) on migrated instances.
 This issue was caused because there was no &#x60;JobIntent&#x60; &#x60;MIGRATED&#x60; and the &#x60;ProcessInstanceMigration&#x60; command processor did not account for child instances of the type &#x60;SERVICE_TASK&#x60;. Thus, during the process instance migration, the properties of the job (like - &#x60;bpmnProcessId&#x60;, &#x60;processDefinitionVersion&#x60;, &#x60;processDefinitionKey&#x60;, and &#x60;elementId&#x60;) did not get updated as they should have.
 To rectify this, a new &#x60;JobIntent&#x60; &#x60;MIGRATED&#x60; was introduced. Furthermore, changes were made to the &#x60;ProcessInstanceMigration&#x60; command processor: for each child instance, a &#x60;ProcessInstance:ELEMENT_MIGRATED&#x60; event is appended. If this child is of type &#x60;SERVICE_TASK&#x60;, a &#x60;Job:MIGRATED&#x60; event is also appended. This ensures that all necessary properties are updated leading to successful migration of service task instances and jobs.
 With these fixes, users can now successfully migrate process instances, and properly use all job commands on these migrated instances. Migration is seamless and all properties of the jobs are updated appropriately.

#### [Introduce new compensation subscription record](https://github.com/camunda/zeebe/issues/15063)

 Previously, the system did not have a record for compensation events. As a result, users were unable to perform important actions like finding completed activities with compensation handlers and tracking the handler&#x27;s state.
 This issue was caused by a lack of support in the system for managing lifecycle states linked to compensation events. This was due to the absence of related functionality and data records within the core engineering of the software.
 A new record for compensation events was introduced, along with lifecycle states for created, triggered, completed, and deleted records. This record also includes relevant data points, such as the tenant id, process instance key, and the element id of activity with a compensation handler, among others.
 Now, users can effectively track and manage compensation events within the system. Activities with compensation handlers can be easily retrieved and the state of these handlers can also be tracked. This new update enhances the overall functionality of tracking process instances and related events.
#### [Add Job Update Timeout intents](https://github.com/camunda/zeebe/issues/15034)

Users were unable to update the timeout for jobs in the system in the past. This resulted in the inability to extend or shorten the allocated timeframe for existing job tasks.
The &#x60;JobIntent&#x60; class lacked the necessary commands, specifically &#x60;UPDATE_TIMEOUT&#x60;, to change job deadline timings. When these commands were called, the system defaulted to returning a &#x60;NOT_FOUND&#x60; rejection. Additionally, job deadline modifications were not being handled correctly in the &#x60;JOB_DEADLINES&#x60; ColumnFamily, as the existing entry for a job could not be updated due to the deadline-jockey key setup.
An &#x60;UPDATE_TIMEOUT&#x60; command was introduced to the &#x60;JobIntent&#x60; class alongside the &#x60;TIMEOUT_UPDATED&#x60; event. The &#x60;UPDATE_TIMEOUT&#x60; command searches for the job in the state and its deadline. The &#x60;TIMEOUT_UPDATED&#x60; event modifies the deadline in the state and ensures the &#x60;JOB_DEADLINES&#x60; ColumnFamily is updated properly, by removing the existing entry for a job and inserting a new value.
Users are now able to successfully extend or decrease the timeout for jobs within the system. The deadline update is also appropriately captured and managed in the &#x60;JOB_DEADLINES&#x60; ColumnFamily.
#### [I can execute a process with a compensation end event](https://github.com/camunda/zeebe/issues/14967)

 In the past, users could deploy a process with a compensation end event; however, executing the process was not possible, affecting the workflow capabilities in some instances.
 The inability to execute was due to the oversight of the invocation of compensation handlers in the process flow.
 A solution has been implemented to enable process execution that contains a compensation end event. Adjustments were made to ensure that the compensation end event is activated and completed, along with the correct event records having the &#x60;COMPENSATION&#x60; event type.
 Now, users can not only deploy but also execute a process that includes a compensation end event. This execution makes it possible to complete a process instance and handles event types appropriately.
#### [I can execute a process with an intermediate compensation throw event](https://github.com/camunda/zeebe/issues/14965)

Previously, users were able to deploy a process with a compensation intermediate throw event, but they could not fully execute the process because the system was bypassing the invocation of compensation handlers. 
This was because the logic in the system was such that it didn&#x27;t support the activation and completion of the compensation intermediate throw event. The issue was the records for the compensation intermediate throw event did not have the event type &#x27;COMPENSATION&#x27;. 
This issue was addressed by implementing the appropriate logic to support the activation and completion of the compensation intermediate throw event. Additionally, the event type &#x27;COMPENSATION&#x27; was added to the records for the compensation intermediate throw event.
Now, users can execute fully a process that contains a compensation intermediate throw event. The system activates and completes the event and the event type &#x27;COMPENSATION&#x27; is correctly assigned.
#### [The record for a compensation event has the correct event type](https://github.com/camunda/zeebe/issues/14944)

 
Users were unable to differentiate compensation events from other BPMN process events as all events related to a BPMN compensation event did not carry their distinct event type. 
 
The &#x60;bpmnEventType&#x60; field of events of the value type &#x60;ProcessInstance&#x60; was not configured to reflect the execution of compensation events. The required event type &#x60;COMPENSATION&#x60; was not previously introduced into the system.
 
A new event type, &#x60;COMPENSATION&#x60;, was introduced into the system. This type was applied to all events related to a BPMN compensation event, which includes compensation intermediate throwing events, compensation end events, compensation boundary events, and compensation start events.
 
Users can now properly distinguish compensation events from other events in a BPMN process. Every event related to a BPMN compensation event currently carries the &#x27;COMPENSATION&#x27; event type.
#### [I can deploy a process with BPMN compensation event subprocesses](https://github.com/camunda/zeebe/issues/14943)

 Users were unable to deploy a process with BPMN compensation event subprocesses due to current validation rules, limiting their execution of such processes.
 This issue occurred because the system&#x27;s validation rules didn&#x27;t permit compensation start events within event subprocesses and these compensation event subprocesses had to be within an embedded subprocess but were not allowed on the process level. 
 The validation rules were duly adjusted to allow compensation start events within event subprocesses and permit compensation event subprocesses to reside within an embedded subprocess, while maintaining the restriction at the process level.
 Users are now able to deploy and execute processes with BPMN compensation event subprocesses efficiently, given that these fulfill the revised validation rules.
#### [I can deploy a process with BPMN compensation events](https://github.com/camunda/zeebe/issues/14942)

 Users were previously unable to deploy a process with BPMN compensation events due to strict validation rules. The system would not permit the deployment process, restricting pivotal functions. 
 The cause of the issue was the extreme tightness of the validation rules which did not allow BPMN elements—like the compensation intermediate throwing event, compensation end event, compensation boundary event, or activity with compensation marker—to be included in the procedure. Other restrictions, including ones concerning sequence flows and activities further compounded the issue.
 The validation rules have now been radically amended. The update has made allowance for the mentioned BPMN elements while maintaining some restrictions to maintain system integrity. These restrictions, focused on sequence flows, activities carrying compensation markers and boundaries, and compensation intermediate throwing or end events, are integral to the system structure.
 As a result of this fix, users are now able to deploy a process with BPMN compensation events unrestrictedly. This increased freedom allows for greater flexibility and functionality within the system.
#### [I can model a process with compensation events via BPMN model API](https://github.com/camunda/zeebe/issues/14939)

 Previously, creating a process via a builder with compensation events was verbose and involved a complicated, unintuitive procedure. 
 This was due to the BPMN model API lacking a smooth, easy-to-use builder for test cases related to compensation events, resulting in a clunky user experience. 
 We improved the user experience by enhancing the design of the builder in the BPMN model API. We made it smoother and more intuitive for creating test cases involving compensation events. 
 Now, users can model processes with compensation events in a much easier and less verbose manner using the BPMN model API, improving the usability of test case creation for compensation events.
#### [Add support to Java client for Form deletion](https://github.com/camunda/zeebe/issues/14858)


The Java client was unable to delete Forms.
The Java client interface was initially designed without a form deletion feature. This lack of feature was due to a prior technical decision to not include this functionality.
A form deletion function was added into the Java client&#x27;s interface. This technical update was completed after resolving issue #14272, which was initially blocking the addition of this feature.
Java client users can now seamlessly delete forms through the interface.
#### [Replace Dependabot with Renovate](https://github.com/camunda/zeebe/issues/14701)

 Our code repository had both Dependabot and Renovate managing dependency updates, causing redundancy as Renovate covered all our use cases, unlike Dependabot.
 The project configuration had incorporated both Renovate and Dependabot for dependency management, which was unnecessary and could lead to confusion.
 We updated the Renovate configuration file to cover Maven and Docker updates, removed Dependabot tool, and also updated related GitHub actions and commitlint.config.js adjustments.
 Now only Renovate is managing all dependency updates in the code repository, making the dependency update process more streamlined and efficient. The superfluous Dependabot GitHub-related actions and elements from commitlint.config.js were cleaned up.
### Zeebe > Misc > Bug Fixes
#### [Verify correct behaviour of input mappings after bump to FEEL 1.17.3](https://github.com/camunda/zeebe/issues/15445)

Previously, users experienced issues with special characters inside input mappings being incorrectly escaped. 
This was due to a bug in the FEEL 1.17.2 which did not correctly handle the escaping of special characters. 
The product was updated to use FEEL 1.17.3, which resolved the issue related to escaping special characters.
Now, users can successfully use special characters inside input mappings without them being escaped incorrectly.
#### [NullPointerException when join is retried after a restart](https://github.com/camunda/zeebe/issues/15381)

During dynamic scaling tests, the system experienced an error and the partition join process got stuck whenever a join was retried after a system restart. This also led to a NullPointerException in the system.
The issue was caused by a join request from Server B to the cluster leader. When the leader committed the configuration in the existing members, Server B received the configuration but not the commit information. This configuration was kept in memory. When Server B was restarted, it re-sent the join request. The leader, expecting Server B to have the configuration, didn&#x27;t send the configuration again which resulted in a NullPointerException. 
Two fixes were applied to address this issue. The first fix ensured the leader would send the configuration again in case of a duplicate join request, while also handling the NullPointerException in the follower by rejecting the AppendRequest. The second, more permanent fix involved including the configurationIndex in the AppendResponse, so the leader can resend the configuration if required.
The system can now handle join requests after a system restart without interruption. Both the leader and the follower handle these requests efficiently without any NullPointerExceptions occurring. The partition joining process is not disrupted due to system restarts.
#### [IT timeout due to &#x60;ScaleResiliencyTest.ScaleDown&#x60;](https://github.com/camunda/zeebe/issues/15343)

 
Users experienced IT timeout issues while attempting to merge changes due to the &#x60;ScaleResiliencyTest.ScaleDown&#x60;, which caused the operation to be cancelled and the system did not allow any further operation.
 
The underlying issue was that Broker-2 was attempting to leave partition 2 but was unable to due to the unavailability of Broker-1. Since Broker-1 was committed that first part of the joint consensus and restarted, this left partition 2 in Broker-2 unstarted. This caused Broker-0, the leader, to commit the second part of the joint consensus before Broker-2 was ready, causing Broker-2 to indefinitely wait for partition-2 to be ready.
 
This was fixed by ensuring that Broker-2 becomes ready before Broker-1 is restarted. This way, the second part of joint consensus isn&#x27;t committed before Broker-2 is fully ready.
 
Now, when users attempt to merge changes, timeouts are no longer an issue, and operations can be performed without being cancelled prematurely. The system&#x27;s operations run smoothly without unexpectedly waiting for partitions to be ready, boosting the efficiency of the operations.
#### [Form events are not replayed](https://github.com/camunda/zeebe/issues/15194)

Consequence:
In the past, users experienced potential loss of deployed forms, resulting in incidents raised at the User Task indicating that the form could not be found. This bug could reoccur, creating interruptions in their workflow.
Cause:
The underlying technical issue was that form events were not properly replayed, leading to them being missed and not added to the state. This could result in the loss of deployed forms in versions 8.3 and 8.4.0-alpha1.
Fix:
A technical solution was implemented to correct the form event replay mechanism to ensure no form events were missed, helping to prevent the loss of deployed forms. 
Result:
Now, form deployment operates seamlessly, with no incidents of missing forms at the User Task. Users can conduct their tasks effectively without the need to redeploy the forms, enhancing the system&#x27;s reliability.
#### [Could not update new leader for partition](https://github.com/camunda/zeebe/issues/15188)

Partition leader updates were unable to be successfully executed, thereby affecting the system&#x27;s partition management. 
The system was trying to replace a partition leader during a term transition but encountered null value instead of the expected current leader term value, leading to a technical impasse.
The code was updated to enhance error handling and ensure that non-null values for current leader terms would be presented during the transition of partition leaders, preventing any null encounters.
A partition leader update now successfully completes with the current leader term presenting a non-null value, thereby ensuring seamless partition management.
#### [8.3.x release benchmark - Authorization data unavailable: The Token can&#x27;t be used before xxx](https://github.com/camunda/zeebe/issues/15047)


Users experienced an error &quot;Authorization data unavailable: The Token can&#x27;t be used before xxx&quot;, which resulted in a dead partition of the service, negatively affecting performance.
There was a clock synchronisation discrepancy between the gateway and broker nodes, specifically regarding the &#x27;issuedAt&#x27; claim of the JWT token. As both were set to &#x27;Instant.now()&#x27;, if the token was verified even half a second earlier than it was set, the JWT library would throw an error. 
The &#x27;issuedAt&#x27; claim, which was irrelevant in the context of unsigned JWT tokens, was removed. Further, the JWT validation at the time of decoding was also removed and custom validation was done to ensure the &#x27;authorized_tenants&#x27; JWT claim is present.
The &quot;Authorization data unavailable: The Token can&#x27;t be used before xxx&quot; error no longer occurs, improving the stability of the service. The JWT tokens are now only validated for &#x27;authorised_tenants&#x27; claim, ensuring security and reducing unnecessary synchronisation issues.
#### [A deployed form is not mentioned in the &#x60;DeploymentEventImpl.toString()&#x60;](https://github.com/camunda/zeebe/issues/14931)

Users previously observed that when deploying a form with the Java client, the output of the &#x60;DeploymentEvent&#x60; failed to print the form.
The underlying cause was a lack in the &#x60;DeploymentEventImpl.toString()&#x60; method to include deployed forms.
We modified the &#x60;DeploymentEventImpl.toString()&#x60; to now include the information regarding deployed forms.
Currently, when users deploy a form using the Java client, the &#x60;DeploymentEvent&#x60; appropriately prints out the deployed forms.
#### [IOPS doubled in CW44](https://github.com/camunda/zeebe/issues/14924)

 Users observed a sudden and intermittent increase of IOPS (input/output operations per second) on certain nodes during CW44 benchmarks, rising from approximately 4000 IOPS to about 8000 IOPS. The inconsistency in performance metrics made it difficult to fully understand and optimize system behavior.
 After an investigation, it was found that the system was erroneously counting some metrics twice, causing an inflated portrayal of IOPS. The duplication occurred due to the presence of two different containers for fetching metrics data and two separate associated services for monitoring.
 The issue was traced and recognized as an echo of a previous bug related to CPU metrics, which granted familiarity with the situation and a probable path towards resolution. A technical fix was initiated to prevent the system from counting the same metrics repetitively.
 Users can now observe an accurate depiction of IOPS on their nodes. The fix removes ambiguity in system metrics, enabling a clearer understanding of the system&#x27;s behaviour and performance, and aiding in optimization efforts.

#### [Improve resilience of remote stream restart](https://github.com/camunda/zeebe/issues/14884)

The system naively asked all members to restart their streams whenever a new member was added, causing unnecessary noise and potential failure for the streams to be recognized by the brokers. 
The problem was due to the system&#x27;s indiscriminate approach to triggering stream restarts alongside an absence of failure retry mechanisms. 
The code was fine-tuned to ensure stream restart requests are sent only to gateways. Moreover, a retry mechanism was introduced, which would repeat the restart attempt (with a programmed delay) until the request eventually succeeds.
Now, only gateways receive requests for stream restarts, and in case of a failure, the system retries the request until it&#x27;s successful, optimizing the system&#x27;s resilience and efficiency.
#### [Leaked message subscriptions cause constant processing load](https://github.com/camunda/zeebe/issues/14814)

 With Zeebe 8.2.12 Cluster, load remained constant due to the persistent processing of &quot;COMMAND PROCESS_MESSAGE_SUBSCRIPTION CORRELATE&quot; and corresponding rejection commands. This led to the constant exertion of processing load on the cluster. 
 The issue occurred due to an anomaly in the partition wherein the subscription column family contained a subscription with &#x60;correlating&#x3D;true&#x60; in one partition but not the other. Theorized as a result of a lost &#x60;MESSAGE_SUBSCRIPTION/CORRELATE&#x60; or &#x60;MESSAGE_SUBSCRIPTION/DELETE&#x60; command, prompting a recurring loop of resend attempts and consequent rejections.
 Instead of focusing on just preventing a recurrence, the team sought to find a way to recover from the broken state. Possible improvements include not rejecting a &#x60;MESSAGE_SUBSCRIPTION/REJECT&#x60; command, not writing &#x60;COMMAND_REJECTION&#x60;s for internal commands, and effectively cleaning up subscription when the receiving partition rejects it. 
 With these improvements implemented, the software is now effective in recovering from a faulty state, preventing potential processing load build-ups. The system also refrains from writing irrelevant &#x60;COMMAND_REJECTION&#x60; and better handles &#x60;MESSAGE_SUBSCRIPTION/REJECT&#x60; commands, offering a more efficient response to issues with internal commands.
#### [IllegalStateException: found snapshot 0. A previous snapshot is most likely corrupted](https://github.com/camunda/zeebe/issues/14699)

 
During the startup of the broker, users encountered a problem where IllegalStateException: found snapshot 0, was present. This could typically indicate some corruption. As a result, the broker was unable to reach a bootloop which was causing headache for users who attempted to boot their systems.
 
The underlying issue turned out to be, most likely, a corruption in snapshots. The problematic snapshot appeared during the initialization of the RaftContext. During the creation of the snapshot, the broker was shutting down, and the system integration check failed to function properly after the shut down. This led to the snapshot being moved to the Raft thread instead, which led to the corruption.
 
The issue was addressed by introducing a proper synchronization process where a persist operation must first be completed before any other action can be taken on the Raft thread. This prevented the half-complete snapshot from being pushed to the Raft. In addition, the checksum file was also corrected to prevent the snapshot from being improperly flagged as corrupted.
Now, the broker no longer gets stuck in a bootloop due to snapshot corruption. It properly waits for the persist operation to complete before moving on to the next processes. Thus, data integrity is maintained, and users are able to boot their system without disruption.
#### [ NullPointerException: Cannot invoke &#x60;PartitionContext.getComponentHealthMonitor()&#x60; because &#x60;this.context&#x60; is null ](https://github.com/camunda/zeebe/issues/14458)

 During the system shutdown process, a NullPointerException (NPE) was triggered intermittently which resulted in an undesired interruption. This was due to the health check service trying to query the health of a Zeebe partition when it was null.
 The system failed to check the availability of the partition context before invoking the &#x60;PartitionContext.getComponentHealthMonitor()&#x60; method. Therefore, when the partition context was null during the shutdown process, the system encountered a NullPointerException. 
 The system was modified to appropriately check for a null context before calling the &#x60;PartitionContext.getComponentHealthMonitor()&#x60; method. If the context is identified as null, the system now returns an unhealthy status. This avoids the NullPointerException from occurring.
 On completion of the fix, the system is now modified to handle shutdown procedures more efficiently, preventing unnecessary interruptions. Now, during shutdown, if a null context is identified, the system promptly returns an unhealthy status, preventing NullPointerExceptions and ensuring robustness during shutdown.
#### [Scheduled tasks should avoid overloading the streamprocessor](https://github.com/camunda/zeebe/issues/13870)

Consequence:
Previously, scheduled tasks such as &#x60;JobTimeoutTrigger&#x60; that periodically appended commands to the log stream could overload the stream processor under certain conditions. If the stream processor was blocked, these tasks repeatedly appended the same command, leading to performance degradation.
Cause:
The scheduled tasks did not have a mechanism to avoid appending the same command multiple times. As a result, these tasks could potentially load the stream processor with redundant commands.
Fix:
The issue was addressed by implementing cache controls for scheduled tasks, allowing them to remember recently append commands. As a result, repeated commands could be avoided hence mitigating the impact on the stream processor.
Result:
With this fix applied, scheduled tasks no longer overload the stream processor with redundant commands. This capability helps improve overall system performance and reduce potential blockages within the stream processor.
#### [Feel error are causing bad user experiences](https://github.com/camunda/zeebe/issues/8938)

Users experienced difficulties when creating feel expressions. The system was creating an instance, but this was causing an incident with a confusing message, making it very hard to troubleshoot and understand what was happening.
The main issue was linked to the evaluation of feel expressions. When an expression failed, the message in the incident did not clearly indicate the source of the problem. This occurred because no function was found with the given name and parameters, a detail that was only visible from the Google console log.
The system was updated to improve incident message clarity when feel expression evaluations fail. The new version of the FEEL engine provides not only evaluation results, but also potential warnings. These warnings are now appended to the incident message to facilitate problem resolution.
Now, if a feel expression evaluation fails, the incident messages created are more clear and helpful as they contain potential warnings from the evaluation, leading to a better, less frustrating user experience.
### Zeebe > Misc > Documentation
#### [Add missing steps to developer handbook](https://github.com/camunda/zeebe/issues/15287)

 Previously, developers were unable to correctly add new record types due to certain steps being missing from the developer handbook. This absence resulted in bug reports and failed continuous integration (CI) tests.
 The developer handbook did not include the necessary steps such as adding a new value type in the engine&#x27;s supported value types to ensure event replay, as well as supporting the new value type in Zeebe Process Test (ZPT).
 Updates were made to the developer handbook incorporating the missing steps to facilitate the correct addition of new record types.
 The developer handbook now contains complete instructions for adding new record types, leading to smoother development processes and a reduction in bug reports and failed CI tests.
### Zeebe > Misc > Merged Pull Requests
#### [fix(raft): resend configuration to members that lost their configuration](https://github.com/camunda/zeebe/pull/15444)

 Before the fix, when a leader initially accepted the current configuration but then lost it due to dataloss or other reasons, the leader&#x27;s view of the member&#x27;s configuration index remained outdated. The leader had an incorrect understanding of the member&#x27;s configuration status, thinking it had a configuration index when it actually did not have one. This could only be corrected by restarting the leader or creating a new configuration.
 The underlying flaw was that leaders would only update the configuration index when they received a successful configuration response. This left room for inconsistencies when there were disruptions or failures in the communication, leading to the leader having an outdated perception of the member&#x27;s configuration index.
 Two main changes were implemented. Firstly, the configuration index was integrated into the append response, allowing the leader to update the configuration index when this response was received. Secondly, followers can now reject append requests if there is no current configuration, signalling to the leader that a configuration request is required.
 Now, leaders accurately track members&#x27; configuration status and can update wrongly perceived configuration indexes. Followers can also reflect their actual configuration status back to the leaders. This change ensures the system can accurately monitor and respond to configuration changes and disruptions, improving the consistency and reliability of the system.
#### [fix: set correct generation](https://github.com/camunda/zeebe/pull/15341)

Users experienced issues with incorrect generation set, as Zeebe software was not working as expected. 
This defect was the result of variables being incorrectly referenced in the initial coding.
The developers adjusted the code to point to the right variables to correct the misfired generations.
After this fix, Zeebe&#x27;s generation settings are working properly, resulting in accurate and reliable process generation.
#### [Calculate the right versions](https://github.com/camunda/zeebe/pull/15340)

Previously, users encountered an issue where the version calculation was not functioning properly. This presented a flaw as accurate version calculation was not available.
This was triggered by a breakdown in the patch versions. The original design was missing a vital component for version calculation which led to the flaw.
The bug was resolved by reintroducing the version calculation part. By restoring this piece and not completely refactoring the system, the issue was fixed.
Now, version calculation functions correctly. The users are able to calculate the right versions which improves the usability of the software.
#### [refactor: allow easy disabling via secret removal](https://github.com/camunda/zeebe/pull/15317)

Disabling TCC used to be difficult for users as it wasn&#x27;t simply controlled by the presence of the secret.
This was due to the fact that the system didn&#x27;t check the existence of the secret to determine whether or not to enable TCC functionality.
A refactor was carried out to enhance the system, enabling it to easily disable TCC simply by removing the secret.
Users can now disable TCC with ease by just removing the associated secret.
#### [Replay deployed forms](https://github.com/camunda/zeebe/pull/15201)

Users were previously unable to replay deployed forms, potentially causing inconsistencies in the intended function and behavior of the system.
The Engine records were not configured to support the replay of &#x27;Form&#x27; records.
The required code changes were implemented to include &#x27;Form&#x27; records in the supported Engine records, ensuring that they can be replayed. An additional unit test was also developed to prevent further regression.
Now, users can replay deployed forms, ensuring consistency and performance of the system as it was designed. The system now offers full support for the replay of &#x27;Form&#x27; records.
#### [fix(clients/go): client does not retry on permanent errors](https://github.com/camunda/zeebe/pull/14217)

 Previously, commands would not stop on permanent errors, regardless of the behavior of the credential provider. This potentially led to harmful system behaviour as processes were continuously retrying even when an error was permanent.
 The issue was caused by the system&#x27;s non-discriminatory approach to errors. Permanent errors were not appropriately identified as non-retryable within the system&#x27;s engineering, causing the system to default to the retry predicate.
 We made adjustments to ensure commands stop on permanent errors. Now, the software correctly recognizes permanent errors as non-retryable and ceases to continue retrying upon encountering such errors.
 Currently, when a permanent error occurs, the software correctly identifies it and halts the commands involved. It will not default to the retry predicate for these types of errors, resulting in a more controlled and efficient error management.
## Zeebe > Broker
### Zeebe > Broker > Bug Fixes
#### [Failed or cancelled topology change operations block further operations](https://github.com/camunda/zeebe/issues/15220)

Previously, the system had blocked any further operations in the event of a failed or cancelled topology change operation. 
This was due to the &#x27;onGoingTopologyChangeOperation&#x27; flag in the &#x27;ClusterTopologyManager&#x27; only being set back to &#x27;false&#x27; upon completion of an operation. It was not reset to &#x27;false&#x27; if a change was cancelled or an operation failed to initialize. 
The issue was addressed on the product engineering side by adding code to reset the &#x27;onGoingTopologyChangeOperation&#x27; flag to &#x27;false&#x27; either when an operation is completed or when it fails or is cancelled. 
The system now permits new operations to start irrespective of whether previous operations failed or were cancelled.
#### [Topology received via gossip can bypass merge with locally persisted topology](https://github.com/camunda/zeebe/issues/15219)

Previously, brokers could lose information about previously applied operations. This occurred when a new topology was received over gossip before the &#x27;TopologyInitializer&#x27; had finished, resulting in the received topology being persisted without merging with the local one.
The local topology was uninitialized when the gossip-based new topology arrived. The system was designed not to overwrite an uninitialized topology with updates received via gossip, but there was an exception with the &#x27;GossipInitializer&#x27;. 
In order to preserve details of applied operations, code was updated such that the local topology would always be prepped for merging before accepting a new topology from gossip. 
Now, brokers maintain a correct account of all applied operations irrespective of the timing of new topology arrival since it merges correctly with the local topology, which avoids data loss and improves the system&#x27;s overall reliability.
#### [Potential inconsistency in raft after restoring from a backup](https://github.com/camunda/zeebe/issues/14509)

 
Previously, restoring from a backup led to potential inconsistency in some partitions, producing an IllegalStateException error. The issue resulted in increased disk usage as no new snapshots could be taken until the term increases to a higher value than before the backup, and, as a result, logs were not compacted.
 
The root of this issue was the reset &quot;term&quot; after restoring from a backup. When a node was not aware of the new leader after the restore, it started a new election, resulting in inconsistency.
 
A technical fix was applied through a Pull Request which addressed this issue by ensuring the term does not reset after restoring from a backup, allowing raft to continue working in all scenarios.
 
Now, there is no potential inconsistency after restoring from backup. Raft can operate as expected in all scenarios. Snapshots can be taken after restoration, thus preventing log pile-up and high disk usage.
# Operate
## Operate > Misc
### Operate > Misc > 🚀 New Features
#### [feat: enable process instance migration in UI](https://github.com/camunda/operate/issues/6023)

Previously, process instance migration was not feasible through the User Interface.
  
This issue happened due to the lack of a feature in the UI for managing the process instance migration.
A feature that enables process instance migration in the user interface was added.
The Users can now migrate process instances directly from the User Interface.
#### [feat(backend): be-5704-pi-migration-test](https://github.com/camunda/operate/issues/6014)

Post-PI migration, users previously faced issues with importing migrated elements including process instances, flow nodes, and variables. 
The problem resided within the back-end engineering of the product, specifically the importer and process instance operation handler were not properly aligned with the new migration changes.
The team addressed these issues by updating the importer to correctly handle migrated elements, and by adding a new handler for the MIGRATE_PROCESS_INSTANCE operation. In addition, comprehensive integration tests were introduced to ensure a robust solution.
With these changes now implemented, users can successfully import migrated elements post-PI migration. This correction maintains smooth process operations and ensures system stability is upheld.
#### [feat(feature-flagged): add migration entry to operations panel](https://github.com/camunda/operate/issues/5972)

 Previously, users could not easily track migration operations from the operations panel, because while the operation entries were shown, they lacked a distinct icon, and did not link directly to related process instances.
  
 The issue resulted from missing software components in the original design. The operations panel was not configured to display a specific icon for migration operations and did not contain active process instance filters linked to a particular operation id. 
 The developers met all the acceptance criteria detailed in the issue. They added a &#x27;Migrate&#x27; icon to indicate migration operations and created a link to process instances filters, where a filter is active for the operation id. To avoid accidentally turning on this feature prematurely, the devs set the feature flags to false. 
 Now, when users open the operations panel, they see a unique migrate icon for each migration operation. They can click on a link which directly leads to the process instances filters, where they can filter by operation id.
#### [feat(backend): clean up opensearch dao inheritence and dependency injection](https://github.com/camunda/operate/issues/5973)

 Before this fix, the software was using autowired for all dependencies which led to a cluster of unnecessary dependencies. Additionally, the base class OpensearchDao was unnecessary and this led to a lack of clarity in the system architecture. 
 The issue was primarily caused by the use of autowired dependency injection for all dependencies instead of just using it for those dependencies that were necessary. Moreover, the persistence of an unneeded base class (OpensearchDao) and the undescriptive naming of the OpensearchPageableDao class contributed to the complexity and lack of clarity in the architecture.
 Dependency injection was used for all necessary dependencies, removing the reliance on autowired. The unneeded base class, OpensearchDao, was removed. The OpensearchPageableDao was renamed to the more declarative OpensearchSearchableDao. Finally, the operate properties dependency was moved to the specific dao that was using it, instead of using a base class.
 Now, dependencies are injected in a more logical and clear way and no unnecessary dependencies are present. The removal of the extra base class and the renaming of the OpensearchSearchableDao lead to a more understandable and streamlined architecture. The software currently operates more efficiently due to the specific placement of the operate properties dependency.
#### [feat(feauture-flagged): disable migrate button for called process instances](https://github.com/camunda/operate/issues/5969)

 
In the past, users were able to select process instances that are called by a parent instance, which led to them seeing an active migrate button even when it was inappropriate.
 
This issue was caused by a lack of programming logic to identify and disable the migrate button for process instances called by a parent instance.
 
A feature flag was implemented to disable the migrate button for process instances that are called by a parent instance. Test cases and logic related to this feature were also updated accordingly.
 
Now, when users select process instances that are called by a parent instance, the migrate button is disabled, preventing any unintended migrations. The system also displays a tooltip to inform users about the button&#x27;s disabled status.
#### [feat(feature-flagged): add target flow node selection to migration view](https://github.com/camunda/operate/issues/5961)

Users were unable to observe a highlighted target flow node in the target diagram when clicking on a correlated row in the bottom panel. This made navigation and correlation between source and target flow nodes difficult, especially in cases where multiple source nodes were mapped to the same target node. 
The product interface lacked a feature to map and highlight corresponding target flow nodes when a row in the bottom panel was selected. This was due to the absence of acceptance criteria implementation related to flow node mapping and highlighting in the original programming of the system.
The product was enhanced by implementing the acceptance criteria specified in issue #5732. This was accomplished by creating programming functionality that maps and visually highlights corresponding target flow nodes when rows in the bottom panel are selected.
Users are now able to see highlighted target flow nodes in the target diagram when they click on a row in the bottom panel. If multiple source nodes map to the same target node, all corresponding source nodes are highlighted, allowing for an easy understanding of the node mapping relationships.
#### [feat(backend): Create batch operation for process instance migration](https://github.com/camunda/operate/issues/5951)

Previously, users experienced a limited functionality of process instance migration as it lacked the ability to perform batch operations.
This was due to the absence of an important enumeration value which was crucial for enabling this feature in the backend system.
We addressed this issue by adding the missing enumeration value to the backend system.
Now, users can perform batch operations during process instance migration, vastly improving the operability and efficiency of their workflows.
#### [feat(feature-flagged): highlight instances in migration summary view](https://github.com/camunda/operate/issues/5952)

 Before the fix, the system failed to highlight the number of active instances, incidents, and expected migrated instances in the migration summary view. 
 The system did not have a feature to show green badges for active instances, red badges for incidents, and blue badges for expected migrated instances, making it harder to understand the status at glance. Additionally, the feature flags were not set to false which held certain features back.
 We developed an upgrade to the system to include green badges for active instances, red badges for the number of incidents, and blue badges for the number of expected migrated instances in the migration summary view. We also set the feature flags to false. 
 Now, the system displays green, red, and blue badges in the migration summary view to quickly reflect the number of active instances, incidents, and expected migrated instances respectively.
#### [feat(backend): Implement OpensearchDecisionInstanceDao](https://github.com/camunda/operate/issues/5953)

The Users were not able to use the OpensearchDecisionInstanceDao due to its absence in the program&#x27;s backend. 
The The backend had not been programmed to implement OpensearchDecisionInstanceDao. 
The The OpensearchDecisionInstanceDao was implemented in the backend, and some minor refactoring was performed.
The Now users can utilize the OpensearchDecisionInstanceDao as it is present and functional in the application&#x27;s backend.
#### [feat(backend): add OpensearchDecisionRequirementsDao and OpensearchDecisionDefinitionDao](https://github.com/camunda/operate/issues/5950)

 Previously, the system lacked support for the integration with OpenSearch since &#x60;OpensearchDecisionRequirementsDao&#x60; and &#x60;OpensearchDecisionDefinitionDao&#x60; were missing.
 This was because &#x60;OpensearchDecisionRequirementsDao&#x60; and &#x60;OpensearchDecisionDefinitionDao&#x60; had not been implemented in the back end of the system.
 The issue was fixed by adding the &#x60;OpensearchDecisionRequirementsDao&#x60; and &#x60;OpensearchDecisionDefinitionDao&#x60; to the backend system.
 Now, the system properly supports OpenSearch integrations, facilitating better search decision requirements and definitions.

#### [feat: OpensearchFlowNodeStatisticsDao](https://github.com/camunda/operate/issues/5942)

Prior to the fix, there wasn&#x27;t a dedicated Dao for acquiring FlowNode statistics in Opensearch, leading to potential inefficiencies and complexities in data retrieval.
The system lacked an implementation of the OpensearchFlowNodeStatisticsDao, let alone its extraction from the OpensearchPageableDao.
Developers introduced the OpensearchFlowNodeStatisticsDao, and extracted the OpensearchPageableDao.
Now, the system includes a streamlined data acquisition layer for FlowNode statistics through the OpensearchFlowNodeStatisticsDao feature. This enhances data retrieval performance and reduces complexity.
#### [feat(feature-flagged): request batch process on migration confirmation](https://github.com/camunda/operate/issues/5931)

 Users were not able to trigger a batch process migration on the Operate backend through an API request, and subsequently navigate to an instance list view with target process and version selected.
 The feature to request batch process on migration confirmation was not implemented in the system. As a result, acceptance criteria as defined in issue #5738 were not met.
 The acceptance criteria were implemented. An API call was set to be sent to the Operate backend to trigger migration, with navigation abilities built-in to allow users to move to the instance list view with the desired process and version selected.
 Users can now trigger a migration upon confirmation, and easily navigate to an instance list view with their desired process and version. Global environment variables &#x60;IS_INSTANCE_MIGRATION_ENABLED&#x60; and &#x60;IS_INSTANCE_MIGRATION_API_MOCKED&#x60; should be set to false for the feature to work correctly.
#### [feat(backend): Create batch operation for process instance migration](https://github.com/camunda/operate/issues/5940)

Users were unable to perform batch operations for process instance migration due to an outdated template version, which was hindering efficiency.
The backend had an outdated version of the template used for batch operations on process instances. 
The underlying issue was fixed by updating the template to the latest version. 
Now, users can efficiently execute batch operations for process instance migration.
#### [feat(backend): Create batch operation for process instance migration](https://github.com/camunda/operate/issues/5898)

Users were unable to perform batch operations for process instance migration, limiting the functionality and efficiency of the system.
This was due to the absence of a MIGRATE_PROCESS_INSTANCE operation type in the system architecture.
The engineering team added a new operation type, MIGRATE_PROCESS_INSTANCE, and created a model for the migration plan. Integration tests were also added to support this new feature.
With this fix implemented, users can now perform batch operations for process instance migration, enhancing the system&#x27;s utility and performance. The system&#x27;s reliability is also boosted by the new integration tests.
#### [feat(feature-flagged): add target element mapping in migration view](https://github.com/camunda/operate/issues/5900)

 Users were unable to proceed in the target flow nodes without at least one element mapped as the &quot;Next&quot; button was disabled in this situation.
 This limitation stemmed from the fact that the previous system iteration allowed only for all service tasks from the target process definition to be shown as targets.
 The code was modified to fulfil the acceptance criteria of showing all service tasks as targets from the target process definition, and disabling the &quot;Next&quot; button until at least one element was mapped.
 Users can now see all service tasks as targets from the target process definition and will have the &quot;Next&quot; button disabled until at least one element is successfully mapped.
#### [feat(backend): implement OpensearchFlowNodeInstanceDao and OpensearchProcessInstanceDao](https://github.com/camunda/operate/issues/5902)

 Prior to this update, users were unable to utilize the OpensearchFlowNodeInstanceDao and OpensearchProcessInstanceDao functionalities in Camunda Zeebe&#x27;s backend as they were not implemented.
 The lack of implementation of OpensearchFlowNodeInstanceDao and OpensearchProcessInstanceDao in backend was due to absent features in the software development process.
 The missing functionalities of OpensearchFlowNodeInstanceDao and OpensearchProcessInstanceDao were implemented in the backend along with the addition of unit tests and updated integration tests.
 With the new implementation of OpensearchFlowNodeInstanceDao and OpensearchProcessInstanceDao, users can now experience expanded functionalities in the Camunda Zeebe&#x27;s backend which is validated by unit and integration tests.
#### [feat(backend): implement OpensearchFlowNodeInstanceDao with tests and improve IT coverage](https://github.com/camunda/operate/issues/5894)

Apologies for the confusion but the input provided doesn&#x27;t seem to be a GitHub issue. A GitHub issue usually includes a description of a bug, error, or suggested feature enhancement. Could you please provide a GitHub issue so I could generate a release note?
#### [feat(feature-flagged): display summary notification in migration summary page](https://github.com/camunda/operate/issues/5841)

 Prior to this fix, the migration summary page did not display a summary notification banner on top of the diagrams when &#x60;IS_INSTANCE_MIGRATION_ENABLED&#x60; was set to false. This led to an inadequate interface experience for users.
  
 Technical issues were identified in the engineering of the product. The interface was not properly programmed to display the summary notification banner when &#x60;IS_INSTANCE_MIGRATION_ENABLED&#x60; was set to false.
 A code change was implemented so that the summary notification banner, excluded from the &#x27;resizable&#x27; part of the page with the designated process name/versions bolded, is now visible on the migration summary page when &#x60;IS_INSTANCE_MIGRATION_ENABLED&#x60; is set to false. The changes are backwards compatible with previous versions.
 Now, users see the appropriate notification banner on top of the diagrams on the migration summary page. The page works as expected, enhancing the user interface experience.
#### [feat(feature-flagged): highlight target flow node on selection](https://github.com/camunda/operate/issues/5827)

Previously, when users clicked on a selectable flow node in the source diagram, the related row in the bottom panel was not highlighted. Also, clicking on a row in the bottom panel did not select the related source flow node in the source diagram. 
This issue was due to a lack of coordination and response between the different UI elements in the software.
A feature was implemented that set up a response system in which clicking on a selectable flow node in the source diagram highlighted the related row in the bottom panel and vice versa.
Now, when you click on a selectable flow node in the source diagram, the related row in the bottom panel gets highlighted. Similarly, clicking a row in the bottom panel selects the related source flow node in the source diagram.
#### [feat(feature-flagged): show mappable flow nodes in migration mode](https://github.com/camunda/operate/issues/5825)

Previously, when users selected a process for mapping, only &#x27;Check payment&#x27; and &#x27;Request for payment&#x27; were displayed in the mapping table. If the process did not contain service tasks, an error would notify users that there were no flow nodes to map.
This issue was caused by the limitation in the implemented acceptance criteria, which only allowed service tasks to be displayed as source flow nodes.
The technical fix involved extending the functionality of the process mapping module to handle all flow node types, not just service tasks. The &#x27;IS_INSTANCE_MIGRATION_ENABLED&#x27; was also set to false.
Now, users see all mappable flow nodes in the mapping table when undertaking migration. Furthermore, processes without service tasks no longer cause an error message to appear.
#### [feat(backend): implement byKey() on OpensearchVariableDao and add test coverage](https://github.com/camunda/operate/issues/5860)

Previously, the OpensearchVariableDao lacked byKey() functionality equivalent to that of Elasticsearch, leading to limitations for users who wished to use this feature.
From an engineering perspective, the byKey() functionality was not implemented for the OpensearchVariableDao, which led to this restriction.
The Opensearch&#x27;s byKey() functionality was developed to mirror Elasticsearch&#x27;s equivalent, and relevant unit test coverage was added to validate this feature.
Users can now utilise the byKey() functionality in OpensearchVariableDao, similar to Elasticsearch, creating a more functional and user-friendly experience.
#### [feat(feature-flagged): leave migration mode modal](https://github.com/camunda/operate/issues/5815)

Users were constantly presented with a migration mode modal.
The IS_INSTANCE_MIGRATION_ENABLED feature flag was incorrectly set to true.
This flag was set to false to disable the migration mode modal.
Now, the migration mode modal no longer appears during the user interaction.
#### [feat(feature-flagged): display modal on migrate button click](https://github.com/camunda/operate/issues/5834)

Previously, users were unable to see a modal when clicking on the migrate button.
This was due to the fact that the &#x60;IS_INSTANCE_MIGRATION_ENABLED&#x60; was not set to false.
We have now ensured that &#x60;IS_INSTANCE_MIGRATION_ENABLED&#x60; is set to false, enabling the display of the modal window.
Now, when a user clicks on the migrate button, a modal will be displayed correctly.

#### [feat(backend): implement OpensearchProcessDefintionDao](https://github.com/camunda/operate/issues/5856)

Prior to the fix, the OpensearchProcessDefinitionDao was not implemented which affected certain parts of functionality related to #5586. 
The implementation for OpensearchProcessDefinitionDao was missing, which made the operation rely on terms of OpensearchDao, causing potential issues with our product&#x27;s backend engineering.
Work was done to implement OpensearchProcessDefinitionDao in terms of OpensearchDao. 
With the implementation of OpensearchProcessDefinitionDao in place, those potential issues related to #5586 should now be resolved, and the backend functionality should now behave as expected.
#### [feat(feature-flagged): add exit migration button](https://github.com/camunda/operate/issues/5807)

Previously, users could not manually perform an exit migration due to the absence of an &quot;Exit Migration&quot; button.
This issue was due to the &#x27;IS_INSTANCE_MIGRATION_ENABLED&#x27; flag being consistently set to &#x27;True&#x27;, which didn&#x27;t allow users to opt out of migration.
A fix was made that added an &quot;Exit Migration&quot; button, and the &#x27;IS_INSTANCE_MIGRATION_ENABLED&#x27; flag was set to &#x27;False&#x27; within the system.
Now, users can manually opt out of migration by clicking on the &quot;Exit Migration&quot; button. This button works when the &#x27;IS_INSTANCE_MIGRATION_ENABLED&#x27; flag is set to &#x27;False&#x27;.
### Operate > Misc > 💊 Bugfixes
#### [fix(backend): fix resource based permissions on SaaS](https://github.com/camunda/operate/issues/6047)

Resource-based permissions on the SaaS backend used to fail, causing accessibility issues for certain user roles. 
This was due to an error in the resource permissioning protocol within our SaaS backend infrastructure. 
We&#x27;ve corrected this error by revising the SaaS resource permission codes to ensure accurate permission allocation based on the assigned user roles.
Now, resource-based permissions work flawlessly in the SaaS backend allowing users to access the resources based on their roles.
#### [fix(backend): different fixes to continue after data loss](https://github.com/camunda/operate/issues/6019)

Operate&#x27;s system became inoperable if there was random data loss of Operate/Zeebe indices/aliases from Elastic.
The system was not checking for the presence of all aliases at startup, it was using update queries which failed in the event of data loss, it didn&#x27;t account for missing parents in post-import processes, and it was not set up to safely ignore and log warnings for missing parent nodes in an import hierarchy.
These issues were rectified with a number of changes. The system now checks for the presence of all aliases at startup and re-adds any if they are missing. Upsert queries are used instead of update queries to safely handle instances of data loss. A flag was added to ignore errors during incident post processing. And finally, the system was updated to ignore missing parent process instances and flow node instances, allow the import to continue, and log warnings about missing data. 
Post this fix, Operate is resilient to random data loss and continues running smoothly even if Operate/Zeebe indices/aliases are deleted from Elastic. Error handling has been improved to log warnings and continue operation in the event of missing parent instances in import processes.
#### [fix(backend): fix initialization of PermissionsService](https://github.com/camunda/operate/issues/6025)

The system was having an issue with the initialization of the PermissionsService that was impacting users.
The cause of the problem was traced back to insufficient callbacks for Identity parameters in the backend code.
The engineers added more callbacks for the Identity parameters in the backend system.
As a result of this fix, the PermissionsService initializes correctly and is operational in the present system state.
#### [fix(backend): Implement index lifecycle for Opensearch (ISM) #5612](https://github.com/camunda/operate/issues/5993)

Previously, users experienced suboptimal performance with Opensearch due to the lack of an index lifecycle management (ISM) strategy. 
The system had not implemented an ISM strategy in the backend for Opensearch, leading to inefficient indexing and potentially reduced search performance.
An index lifecycle was implemented for Opensearch, optimizing the system&#x27;s ability to manage and store data effectively.
Users of the system now experience improved performance due to the efficient management and storage of Opensearch indexes. The system maintains faster and more reliable search results.
#### [fix(backend): fix race condition where DatabaseInfo bean is accessed before fully constructed](https://github.com/camunda/operate/issues/5991)

Previously, users could experience a Null Pointer Exception (NPE) in the SessionService&#x27;s postConstruct method. This issue would only occur if a scheduled deletion of expired session ids led to a static method call to DatabaseInfo.getCurrent() before the DatabaseInfo bean had been fully created.
This issue was caused by inconsistencies in bean creation order. Because the session id cleanup task runs during the SessionService bean&#x27;s construction and makes a static method call to DatabaseInfo, there was a possibility that DatabaseInfo had not been fully instantiated. This led to an NPE in getCurrent(), which assumed the applicationContext was already set.
This problem was rectified by changing the bean creation order to ensure DatabaseInfo is fully instantiated before any implementations of AbstractIndexDescriptor. An NPE guard was added to DatabaseInfo.isCurrent() along with a log to indicate if this function is called before applicationContext is set. Additionally, a dependency was added in AbstractIndexDescriptor (through Autowired) to force full creation of DatabaseInfo before any components that extend AbstractIndexDescriptor are created.
Following these changes, users should no longer experience the aforementioned NPE. The system can now provide early alerts if there&#x27;s an attempt to call the function before applicationContext is set.
#### [fix(backend): 5787 NPE issue fix](https://github.com/camunda/operate/issues/5970)


Users were experiencing a null pointer exception (NPE) when trying to utilize certain functionalities of the system. This led to an unexpected system failure and disrupted the user experience.
The underlying cause of this issue was a lack of null checks in the backend code, leading to an unhandled null reference. This was particularly present in the handling of certain user actions, causing the system to break.
To resolve this, we introduced additional null pointer checks in our backend code to validate the objects before use. This prevents any null reference from being accessed without validation.
As a result, users can leverage the system functionalities without experiencing any unexpected system failures due to NPE issues. The system works smoothly, and user interactions are handled without causing any Null Pointer Exceptions, leading to an improved user experience and reliable system performance.
#### [fix(backend): OpensearchIncidentDao implementation](https://github.com/camunda/operate/issues/5959)

Sorry for the confusion earlier. As I can not find any specific issue details in the provided information, it&#x27;s really difficult for me to generate release notes. Please include information on what problem was observed (consequence), what caused it (cause), what changes were made to fix the issue (fix), and how it affected functionality after changes were implemented (result). This will allow me to generate a correct release note.
#### [fix(backend): fix timeout for Opensearch healthcheck](https://github.com/camunda/operate/issues/5962)

The system was failing to conduct a health check for Opensearch due to an inappropriately timed timeout, causing inconveniences in assessing the system&#x27;s status.
This was caused by inappropriate configuration settings in the backend of the system that allocated insufficient time for Opensearch&#x27;s health check function to run.
A code adjustment was made on the backend to correct the timing settings of the Opensearch health check, allowing it sufficient time to function as expected.
Now, the system&#x27;s health check function operates correctly within the set timeframe, contributing to a more reliable assessment of Opensearch&#x27;s status.
#### [fix(backend): OpenSearch: Workaround for Parent Aggregation issue in java client (#5787)](https://github.com/camunda/operate/issues/5935)

The system was showing less than accurate results when queries had parent aggregations. 
The issue arose due to a limitation in the Java client, which did not properly handle parent aggregations in OpenSearch requests.
A new method, &#x27;searchAsMap,&#x27; was introduced to the ExtendedOpenSearchClient and OpenSearchDocumentOperations to properly handle this case.
With this fix, accurate results are generated when executing queries with parent aggregations in the system.
#### [fix(backend): Workaround for search_after issue in OS java client (#5788)](https://github.com/camunda/operate/issues/5897)

 
Before this fix, there was an issue in the &#x60;SearchRequest&#x60; method of OpenSearch Java client leading to erroneous functionalities within the &#x60;OpenSearchClient&#x60;.
 
The problem was due to a bug present in the OpenSearch Java client&#x27;s &#x60;SearchRequest&#x60; method. This bug was not properly intercepting and handling search requests.
 
A workaround was created by implementing a new method &#x60;fixedSearch&#x60; under the &#x60;ExtendedOpenSearchClient&#x60;. Additionally, a bespoke &#x60;FixedSearchRequest&#x60; - a modified copy of &#x60;SearchRequest&#x60; with the necessary fixes - was created, making the necessary fix at the product level.
 
With the application of the fix, search requests are now handled appropriately in the &#x60;OpenSearchClient&#x60;. If the &#x60;OpenSearchClient&#x60; is an instance of &#x60;ExtendedOpenSearchClient&#x60;, the &#x60;fixedSearch&#x60; method is used to optimize the functionality. This fix makes the system more robust and future removal of the &#x60;ExtendedOpenSearchClient&#x60;, once an official fix is implemented in OpenSearch client, easier.
#### [fix(backend): 5788 Add opensearch-java-client module](https://github.com/camunda/operate/issues/5879)

The backend was lacking a module to interface with OpenSearch, which was limiting its functionality and compatibility.
The system was missing the opensearch-java-client module, which prevented backend integration with OpenSearch.
Developers added the missing opensearch-java-client module to the backend in this update.
The system now includes the opensearch-java-client module, improving its functionality and extending compatibility with OpenSearch.
# Tasklist
## Tasklist > Misc
### Tasklist > Misc > 🚀 New Features
#### [feat: support for ES 8.9](https://github.com/camunda/tasklist/issues/3900)

The software wasn&#x27;t supportive of Elasticsearch version 8.9, inhibiting users from taking advantage of the latest features and improvements of ES 8.9+.
The ElasticSearchConnector wasn&#x27;t configured properly to support ES 8.9+. This was further compounded by compatibility issues between Spring Boot 3.1 and ES Java Client 8.9.
The fix involved the addition of a new Bean to the ElasticSearchConnector and updating ES versions at all essential places in the software. This adaptation was made following a proposed workaround for addressing Spring Boot 3.1 incompatibility with ES Java Client 8.9.
Users can now effectively use the improved features that come with ES 8.9+, as the software now provides full support for Elasticsearch version 8.9+.
#### [feat: Implement User Group Retrieval and Access Restrictions in Tasklist (Self Management)](https://github.com/camunda/tasklist/issues/3868)

Apologies for the misunderstanding, but I don&#x27;t see any specific GitHub issue text in your request. Could you please provide me with a GitHub issue to generate a release note?
#### [feat: Extend Task Search API to Include Task Variables](https://github.com/camunda/tasklist/issues/3786)

Consequence:
Users were not previously able to fetch task variables when searching for tasks using the task Search API.
The API was not set up to pull task variable information during a task search. 
The task Search API was updated to fetch task variables. This was done by using &#x60;VariableService.getVariablesPerTaskId(List&lt;GetVariablesRequest&gt;)&#x60; to fetch tasks&#x27; variables that match the &#x60;includeVariables&#x60; in the search request. 
Now when users search for tasks, they can also pull the associated task variables. This includes runtime variables for &#x60;CREATED&#x60; tasks and task variables for &#x60;COMPLETED&#x60; tasks. Note that draft variables are not fetched.
#### [feat: Update error message when form fetch fails](https://github.com/camunda/tasklist/issues/3899)

 Previously, users were receiving unclear error messages when an attempt to fetch forms failed. 
 The underlying problem was rooted in the description logic of the system, which was not properly coded to provide specific error messages according to the particular error causing a form fetch to fail.
 The error messages linked to form fetching failure have been updated and improved. This was achieved by modifying the description logic in the code to more accurately represent the reason for the failure.
 Now, when a form fetching failure occurs, users receive a specific and understandable error message, allowing easier identification and rectification of the issue.
#### [feat: use identity spring boot starter](https://github.com/camunda/tasklist/issues/3846)

 Users were unable to authenticate with Azure AD via the Tasklist interface.
 The old configuration style for the Identity SDK wasn&#x27;t suitable for dealing with Azure AD.
 The configuration style for the Identity SDK was changed to the new Spring Boot Start approach which included successful testing with Azure AD.
 Users should now be able to authenticate Tasklist using Azure AD plugin with the new spring boot start approach configuration.
#### [feat: Delete process definition in Tasklist](https://github.com/camunda/tasklist/issues/3738)

 Users noticed that upon deleting a Process definition, related elements in the Tasklist such as Tasks, TaskVariables, Process entity, and Embedded forms did not get deleted accordingly. ProcessInstances were untouched as they didn&#x27;t refer to the process definition id. This created clutter and confusion in the Tasklist. 
 The system didn&#x27;t have an action to handle the deletion of process definition related objects in Tasklist upon the deletion of a Process definition event.
 A feature was implemented that deletes related objects in the Tasklist on the deleting of a Process definition event. Tasks on the partition provided in Zeebe record, TaskVariables, the Process entity, and Embedded forms are deleted accordingly. 
 Now, users can see that upon deleting a Process definition, all related objects in the Tasklist are also deleted. This clears away any related objects that are no longer in use, leading to a clean and straightforward user experience.
#### [feat(form): replace carbon-styles with SASS stylesheet](https://github.com/camunda/tasklist/issues/3749)

The use of carbon-styles had created dependency issues, affecting the seamless execution of the Form-JS program. This issue was marked by idiosyncrasies in the stylesheet, effectively hampering the user experience. 
The outdated carbon-styles system was being utilized in the program, instead of the more current and effective SASS stylesheet. 
The deprecated carbon-styles was replaced with the SASS stylesheet, effectively mitigating the issue. This was implemented following a systematic review and testing procedure, ensuring the compatibility and efficiency of the SASS stylesheet. 
The Form-JS program now operates with increased efficiency, reliability, and cleanliness, thanks to the implementation of the SASS stylesheet. Dependencies related to the stylesheet are no longer an issue, directly enhancing user experience.
#### [feat: add the java event for the form deletion ](https://github.com/camunda/tasklist/issues/3746)

 Previously, users were unable to delete forms in importer 8.4.0 as this function was unsupported, impacting system utility and user experience. 
 This issue resulted from a lack of support for Form Deletion in importer 8.4.0 in the initial software design.
 Support for Form Deletion in importer 8.4.0 was added, and the relevant integration tests were updated. The necessary APIs for handling deletion were also prepared and merged in prior PRs, completing the core functionality.
 Users can now delete forms in importer 8.4.0, enhancing the overall functionality of the software. The system reliably supports this action following successful tests and approvals.
### Tasklist > Misc > 💊 Bugfixes
#### [fix: Some Identity configuration parameters are not taken from CAMUND…](https://github.com/camunda/tasklist/issues/3967)

 Previously, certain Identity configuration parameters were not being properly received from CAMUNDA_TASKLIST_* environment variables. This led to issues in configuring the Identity aspects of the system, compromising its functionality. 
 The issue was caused by a technical oversight regarding how environmental variables were handled within the system. 
 The problem was rectified by ensuring the correct handling of CAMUNDA_TASKLIST_* environment variables within the system configuration. The underlying code responsible for this was modified accordingly. 
 Users can now successfully configure Identity parameters using the CAMUNDA_TASKLIST_* environment variables. The system operates as intended, respecting user-defined configurations in the Identity parameters.
#### [fix: temporar fix for clear scroll for AWS opensearch](https://github.com/camunda/tasklist/issues/3955)

Users experienced an exception when attempting to clear scroll for AWS opensearch, as reported in issue #3939.
This was due to an underlying technical issue in our exception handling related to AWS opensearch.
We implemented a temporary fix for the issue by catching the exception being thrown. 
Now, users should not experience this exception when attempting to clear scroll for AWS opensearch. However, a long-term solution is still being sought.
#### [fix: creating aliases in case they don&#x27;t exist](https://github.com/camunda/tasklist/issues/3904)

Users faced problems while creating aliases, resulting in lack of functionality and user dissatisfaction.
In the former product configuration, the potential for aliases to be nonexistent was not properly addressed. This was due to the absence of checks and balances in place to ensure their creation.
This issue was addressed by implementing a system that verifies the existence of aliases. If they don&#x27;t exist, the system now creates them.
Now, when users attempt to create aliases, the product ensures their successful creation, leading to a smoother and more efficient user experience.
#### [fix: Fix Archiving for Opensearch](https://github.com/camunda/tasklist/issues/3940)

Users experienced a timing out issue with the run-os when attempting to use the ArchiverIT.shouldDeleteProcessInstanceRelatedData function. 
This was caused by a technical fault within the system, resulting in the ArchiverIT function being stuck and consequently causing timeouts in the run-os.
The developers resolved the issue by identifying and debugging the root cause of the ArchiverIT function being locked, the necessary adjustments were made, and the function was successfully unblocked. The tests then verified the acceptance criteria identified in the issue.
The system now allows for processes to run smoothly when the ArchiverIT.shouldDeleteProcessInstanceRelatedData function is utilized, with no reports of timing out in the run-os. This fix improves user experience and system efficiency.
#### [fix: apply &#x60;rolloverBatchSize&#x60; when collecting instances to archive](https://github.com/camunda/tasklist/issues/3452)

Users were experiencing issues when trying to archive instances due to the system not properly applying the &#x60;rolloverBatchSize&#x60;. This caused a hinderance in the process of archiving instances. 
The underlying cause was a problem in the coding of the software. The code was not accurate in its implementation of collecting instances for archiving, particularly where &#x60;rolloverBatchSize&#x60; should have been applied. 
The technical fix involved correcting the coding error by ensuring the &#x60;rolloverBatchSize&#x60; was correctly applied when collecting instances to archive. 
Now, when attempting to archive instances, the process runs smoothly with the &#x60;rolloverBatchSize&#x60; correctly implemented. This resulted in improved functioning of instance archiving.
#### [fix: return formId instead of null when has no form active](https://github.com/camunda/tasklist/issues/3896)

Users were unable to handle 404 exception for &#x27;get forms&#x27; on &#x27;Start Process by Form&#x27; as the system used to return null instead of formId when there was no form active, causing disruption in the workflow process.
The underlying issue was in the specific area of the code where formId was expected to be returned, but it returned null if no form was active.
The code was modified to return the formId instead of null, even when there is no form active.
As a result of this change, users can now appropriately handle a 404 exception for &#x27;get forms&#x27; on &#x27;Start Process by Form&#x27; even if there is no form active, which ensures a smoother and more efficient workflow process.
#### [fix: fixing AWS OpenSearch Connection](https://github.com/camunda/tasklist/issues/3887)

Users were previously unable to connect to AWS OpenSearch due to lack of support in the system.
The system was initially engineered without the necessary configuration to support AWS OpenSearch.
The necessary configurations were added to the system to support AWS OpenSearch.
Users can now establish a connection to AWS OpenSearch using the system.
#### [fix: Prevent big forms from being cropped](https://github.com/camunda/tasklist/issues/3818)

Users encountered a problem where large forms were being cropped, hindering their ability to interact with all content. 
The issue was due to the inability of the system to adequately resize to accommodate forms of a larger size, causing them to be cropped. 
Code adjustments were made to ensure that the system can properly scale to the size of incoming forms, preventing them from being cropped. 
Now, no matter the size of the form, the system scales appropriately ensuring that no content is cropped and users can interact with the full form.
#### [fix: Show error messages when variable fetch fails](https://github.com/camunda/tasklist/issues/3778)

Users were not received any error messages when the fetch for variables failed, causing confusion as to whether the program was working correctly.
The system was not properly configured to provide notifications or error messages when the variables request failed.
An error handling mechanism was added to show an error message when a request to fetch variables fails.
Now, when the variables request fails, users are immediately notified with an error message, improving system clarity and user experience.
#### [fix: extract the var retrieve from the loop + add log messages (#3817)](https://github.com/camunda/tasklist/issues/3852)

Users were experiencing inefficiencies in the system due to a variable retrieval process located within a loop causing longer processing times. There was also a lack of informative log messages, making problem investigation challenging.
This issue was technically caused by the design of the code where the variable retrieval was unnecessarily implemented inside a loop. Such placement resulted in repeated and redundant operations, culminating in slower performance. Insufficient logging was also due to inadequate consideration for debugging during the early-stage development.
Developers extracted the variable retrieval out of the loop to avoid unnecessary repeated processes. They also introduced more informative log messages in the system to improve debugging and investigation.
With the fix in place, the system now performs operations more efficiently, resulting in faster response times. Enhanced log messages also provide more context, making the system easier to manage and troubleshoot.
#### [fix: replace null string to object mapper node](https://github.com/camunda/tasklist/issues/3848)

In the past, the front end was unable to interpret &quot;null&quot; enclosed in quotes. This led to complications in data manipulation and was observable by users in form of the system failing to correctly handle null data inputs. 
This issue was originally due to a patch applied to prevent null pointer exceptions in the backend, which involved representing null values as a string with quotes (&quot;null&quot;) rather than using the object mapper&#x27;s null node. 
To resolve the problem, the &quot;null&quot; string was replaced with an Object Mapper method that presents null as a null node. 
Now, when there&#x27;s a null data, both the front end and the backend can reliably interpret and handle it correctly. This change enhances data manipulation in the system and eliminates previous issues related to null data input handling.
