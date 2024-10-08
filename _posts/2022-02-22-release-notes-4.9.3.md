---
title: "Release Notes - Apache RocketMQ - Version 4.9.3"
categories:
  - Release_Notes
tags:
  - Release_Notes
  - RocketMQ
  - Version
---

Below is a summary of the issues addressed in the 4.9.3 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to <a href='/docs/quick-start/'>Quick Start</a>.

<h2> Download the 4.9.3 release</h2>
    
* Source: [rocketmq-all-4.9.3-source-release.zip](https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.9.3/rocketmq-all-4.9.3-source-release.zip) [[PGP](https://www.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-source-release.zip.asc)] [[SHA512](https://www.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-source-release.zip.sha512)]
* Binary: [rocketmq-all-4.9.3-bin-release.zip](https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.9.3/rocketmq-all-4.9.3-bin-release.zip) [[PGP](https://www.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-bin-release.zip.asc)] [[SHA512](https://www.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-bin-release.zip.sha512)]

## Feature
<ul>
<li>[<a href='https://github.com/apache/rocketmq/pull/1085'>RIP-9</a>] - [RIP-9] add DefaultPullConsumer api doc</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3694'>RIP-28</a>] - [RIP-28] light message queue(LMQ)</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/2986'>ISSUE-2986</a>] - [ISSUE-2986] - Support for multiple ACL files in a fixed directory</li>
</ul>

## Improvement
<ul>
<li>[<a href='https://github.com/apache/rocketmq/issues/3585'>ISSUE-3585</a>] - [ISSUE-3585] - [Part F] eliminate regex match in topic/group name check</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3585'>ISSUE-3585</a>] - [ISSUE-3585] - [Part H] Avoid unnecessary StringBuilder resizing on critical path</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3585'>ISSUE-3585</a>] - [ISSUE-3585] - [Part J] Use MappedByteBuffer instead of FileChannel to …</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3223'>ISSUE-3223</a>] - [ISSUE-3223] - Optimize  startup script to support greater jdk version</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3449'>ISSUE-3449</a>] - [ISSUE-3449] - Delayed message supports asynchronous delivery</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3487'>ISSUE-3487</a>] - [ISSUE-3487] - Benchmark supports custom AK/SK</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3832'>ISSUE-3832</a>] - [ISSUE-3832] - in order to improve the performance by change the variable location of queueId</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3827'>ISSUE-3827</a>] - [ISSUE-3827] - Improve Performance of transactional message and schedule message</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3173'>ISSUE-3173</a>] - [ISSUE-3173] - Isolate Broker logs when multiple Broker services are deployed on the same machine.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3825'>ISSUE-3825</a>] - [ISSUE-3825] - Use default SO_SNDBUF/SO_RCVBUF/WRITE_BUFFER_WATER_MARK value</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3818'>ISSUE-3818</a>] - [ISSUE-3818] - update guava to 31.0.1-jre</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3812'>ISSUE-3812</a>] - [ISSUE-3812] - DefaultMQProducer#sendKernelImpl Line760 tranMsg does not need to check for null when using Boolean.parseBoolean()</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3695'>PR-3695</a>] - [PR-3695] Remove useless code</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3850'>PR-3850</a>] - [PR-3850] Re-enable testing on ARM64</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3762'>PR-3762</a>] - [PR-3762] Avoid new lines in log</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3269'>PR-3269</a>] - [PR-3269] add defaultRequestProcessor test</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3674'>PR-3674</a>] - [PR-3674] add tests for computePullFromWhereWithException</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3674'>ISSUE-3674</a>] - [ISSUE-3674] Add unit test for AllocateMessageQueueAveragelyByCircle</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/1665'>ISSUE-1665</a>] - [ISSUE-1665] - Add more unit test for Validators</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3674'>ISSUE-3674</a>] - [ISSUE-3674] - add tests for AllocateMessageQueueAveragely</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3602'>ISSUE-3602</a>] - [ISSUE-3602] - add AdminBrokerProcessor Test</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3674'>ISSUE-3674</a>] - [ISSUE-3674] - Improve the test cases of the tools module</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3724'>ISSUE-3724</a>] - [ISSUE-3724] - : Polish the unit test of class ConsumeMessageConcurrentlyService</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3214'>PR-3214</a>] - [PR-3214] optimize namesrv default address docs</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3692'>ISSUE-3692</a>] - [ISSUE-3692] - docs: Modify the title content about the message query documentation.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3757'>ISSUE-3757</a>] - [ISSUE-3757] - docs: Polish the document 'Design_Query.md'.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3801'>ISSUE-3801</a>] - [ISSUE-3801] - Polish the document 'CLITools.md'.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3794'>ISSUE-3794</a>] - [ISSUE-3794] - add DefaultMQPullConsumer document specification</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3774'>ISSUE-3774</a>] - [ISSUE-3774] - docs: Polish the document 'Example_Transaction.md'.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3424'>ISSUE-3424</a>] - [ISSUE-3424] - Polish the doc for tracing parts.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3550'>ISSUE-3550</a>] - [ISSUE-3550] - doc:fix typo in readme</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3782'>ISSUE-3782</a>] - [ISSUE-3782] - docs: Fix the default value of parameter 'sendMsgTimeout'.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3863'>ISSUE-3863</a>] - [ISSUE-3863] - Updated Notice file to 2022</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3853'>ISSUE-3853</a>] - [ISSUE-3853] - add log for interruptedException</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3852'>ISSUE-3852</a>] - [ISSUE-3852] - Move the Logappender module to external</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3836'>ISSUE-3836</a>] - [ISSUE-3836] - depreciated unused class</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3797'>ISSUE-3797</a>] - [ISSUE-3797] - Improve DefaultMQProducerImpl code</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3789'>ISSUE-3789</a>] - [ISSUE-3789] - optimize: Tag the name of  consuming thread whith consumeGroup.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3773'>ISSUE-3773</a>] - [ISSUE-3773] - Adding exception message with broker addr when occuring broker connect timeout</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3720'>ISSUE-3720</a>] - [ISSUE-3720] - perf: avoid multiple expansion when the number of elements in the MessageConst class is determined</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3696'>ISSUE-3696</a>] - [ISSUE-3696] - Optimize the query consumer connection display</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3684'>ISSUE-3684</a>] - [ISSUE-3684] - change client jdk version to 1.6</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3539'>ISSUE-3539</a>] - [ISSUE-3539] - Add parameter verification</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3651'>ISSUE-3651</a>] - [ISSUE-3651] - for add netty channel option WRITE_BUFFER_WATER_MARK</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3642'>ISSUE-3642</a>] - [ISSUE-3642] - Display GID and Topic with namespace</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3644'>ISSUE-3644</a>] - [ISSUE-3644] - exchange parameters</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3645'>ISSUE-3645</a>] - [ISSUE-3645] - Remove TBW102 topic not found warn log in rocketmq-clie…</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3622'>ISSUE-3622</a>] - [ISSUE-3622] - bump up log4j-slf4j-impl version to 2.15.0</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3604'>ISSUE-3604</a>] - [ISSUE-3604] - Some important interface methods add comment</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3587'>ISSUE-3587</a>] - [ISSUE-3587] - Unnecessary boxing of primitives</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3593'>ISSUE-3593</a>] - [ISSUE-3593] - entrySet() replace keySet()</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3564'>ISSUE-3564</a>] - [ISSUE-3564] - Enclose namesrvAddr in example of mqadmin tool by quotation marks</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3565'>ISSUE-3565</a>] - [ISSUE-3565] - Removing message filter impldev</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3558'>ISSUE-3558</a>] - [ISSUE-3558] - Clear spelling errors in comments in quickstart</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3560'>ISSUE-3560</a>] - [ISSUE-3560] - remove deprecated status in the orderly consumer examples.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3467'>ISSUE-3467</a>] - [ISSUE-3467] - Fail fast on loading files with error mappedFileSize</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3424'>ISSUE-3424</a>] - [ISSUE-3424] - Validators.checkMessage() is used twice.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3370'>ISSUE-3370</a>] - [ISSUE-3370] - group same Exceptions</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3286'>ISSUE-3286</a>] - [ISSUE-3286] - replace Timer with ScheduledExecutorService</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3048'>ISSUE-3048</a>] - [ISSUE-3048] - add example of OnewayProducer and ScheduledMessage</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3015'>ISSUE-3015</a>] - [ISSUE-3015] - when slaveAckOffset greater than local commitLog offset, break …</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/2969'>ISSUE-2969</a>] - [ISSUE-2969] - Add a skip accumulation message command in mqadmin.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/2580'>ISSUE-2580</a>] - [ISSUE-2580] - Check producerTable or consumerTable is empty when updateTopicRouteInfoFromNameServer</li>

</ul>

## Bug
<ul>
<li>[<a href='https://github.com/apache/rocketmq/issues/3860'>ISSUE-3860</a>] - [ISSUE-3860] - fix wrong use of scheduleAtFixedRate in client code</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3551'>ISSUE-3551</a>] - [ISSUE-3551] - Fix admin cloneoffset</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3527'>ISSUE-3527</a>] - [ISSUE-3527] - Fix some request header setting errors and naming issues</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/2516'>ISSUE-2516</a>] - [ISSUE-2516] -  Fix the value of sendThreadPoolQueueHeadWaitTimeMills is 0 most of the time</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3579'>ISSUE-3579</a>] - [ISSUE-3579] - Fix spelling mistake in getter/setter method of mQClientFactory</li>
<li>[<a href='https://github.com/apache/rocketmq/pull/3663'>PR-3603</a>] - [PR-3603] Fix spelling error in DefaultMessageStore</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3666'>ISSUE-3666</a>] - [ISSUE-3666] - fix CI error in RIP-28 at getmQClientFactory</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3666'>ISSUE-3666</a>] - [ISSUE-3666] - fix build error in RIP-28 at getmQclientFactory</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3687'>ISSUE-3687</a>] - [ISSUE-3687] - Fix wrong method comment about transaction message.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3685'>ISSUE-3685</a>] - [ISSUE-3685] - Fix param spelling error</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3630'>ISSUE-3630</a>] - [ISSUE-3630] - Fix the bug that the broker will hang after polish the headWaitTimeMills method</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3601'>ISSUE-3601</a>] - [ISSUE-3601] - Fix dledger put batch msg stats bug</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/2706'>ISSUE-2706</a>] - [ISSUE-2706] - Fix the problem of returning SEND_OK after flush failed</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3394'>ISSUE-3394</a>] - [ISSUE-3394] - fix duplicate keys in trace message</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3476'>ISSUE-3476</a>] - [ISSUE-3476] - Fix last separator of properties string is missing when using batch send</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3430'>ISSUE-3430</a>] - [ISSUE-3430] - fix the problem that setting parameter mqClientApiTimeout doesn't take effect</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/951'>ISSUE-951</a>] - [ISSUE-951] - Fixed an incorrect offset problem in the ResetOffsetByTimeCommand</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3603'>ISSUE-3603</a>] - [ISSUE-3603] - Fix(client): fetch and commit offset need to use master broker firstly</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3613'>ISSUE-3613</a>] - [ISSUE-3613] - bug fix, solve message hash conflict in index file</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3786'>ISSUE-3786</a>] - [ISSUE-3786] - fix: The length of properties value should be checked before converting them to short.</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3556'>ISSUE-3556</a>] - [ISSUE-3556] - Fix:When broker is down, rocketmq client can not retry under Async send model</li>
<li>[<a href='https://github.com/apache/rocketmq/issues/3453'>ISSUE-3453</a>] - [ISSUE-3453] - Producer cannot shutdown completely</li>
</ul>