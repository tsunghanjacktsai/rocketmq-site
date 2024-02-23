# RocketMQ MQTT 快速开始

## 系统要求

- 64位操作系统，推荐 Linux/Unix/macOS
- 64位 JDK 1.8+

## 部署说明

由于RocketMQ-MQTT项目依赖RocketMQ底层的多队列分发，RocketMQ从4.9.3版本开始支持这一特性，因此您需要确认RocketMQ的版本升级到4.9.3或更高版本，并且确保以下配置项已开启：

```text
enableLmq = true 
enableMultiDispatch = true
```

RocketMQ-MQTT的部署参考项目说明，下载工程release版本或直接从源码构建。

```text
git clone https://github.com/apache/rocketmq-mqtt
cd rocketmq-mqtt 
mvn -Prelease-all -DskipTests clean install -U 
cd distribution/target/ 
```

源码构建完成后，编辑conf/service.conf，完成MQTT相关配置,如下

```text
username=xxx    // 权限验证账户配置
secretKey=xxx    // 权限验证账户配置
NAMESRV_ADDR=xxx  //namesrv接入点
eventNotifyRetryTopic=xx   //notify重试topic，提前创建
clientRetryTopic=xx  //客户端消息重试topic，提前创建
```
还有其他更详细的配置和前置步骤参考 [README.md](https://github.com/apache/rocketmq-mqtt/blob/main/README.md)

最后先启动meta服务（MQTT的元数据中心），再启动mqtt broker 。进入distribution/target/bin 目录，启动进程。

```text
sh meta.sh start
sh mqtt.sh start
```


## 示例说明

RocketMQ-MQTT项目工程代码里面提供了基本的[example](https://github.com/apache/rocketmq-mqtt/tree/main/mqtt-example)代码，详见代码示例。

```text
MqttConsumer.java  // MQTT客户端启动订阅消息
MqttProducer.java   // MQTT客户端启动发布消息
RocketMQConsumer.java //RocketMQ客户端启动订阅消息
RocketMQProducer.java  // RocketMQ客户端启动发布消息
```
