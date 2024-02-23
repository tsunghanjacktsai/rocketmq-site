"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9682],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=r,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return t?o.createElement(m,c(c({ref:n},d),{},{components:t})):o.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(58168),r=(t(96540),t(15680));const a={},c="RocketMQ Connect in Action 2",i={unversionedId:"connect/05RocketMQ Connect In Action2",id:"connect/05RocketMQ Connect In Action2",title:"RocketMQ Connect in Action 2",description:"PostgreSQL Source(CDC)  -  >RocketMQ Connect  ->  MySQL Sink(JDBC)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-connect/05RocketMQ Connect In Action2.md",sourceDirName:"10-connect",slug:"/connect/05RocketMQ Connect In Action2",permalink:"/docs/4.x/connect/05RocketMQ Connect In Action2",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/05RocketMQ Connect In Action2.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect in Action 1",permalink:"/docs/4.x/connect/04RocketMQ Connect In Action1"},next:{title:"RocketMQ Connect in Action 3",permalink:"/docs/4.x/connect/06RocketMQ Connect In Action3"}},l={},s=[{value:"Preparation",id:"preparation",level:2},{value:"Start RocketMQ",id:"start-rocketmq",level:3},{value:"Start Connect",id:"start-connect",level:3},{value:"Compiling Connector Plugin",id:"compiling-connector-plugin",level:4},{value:"Start Connect Runtime",id:"start-connect-runtime",level:4},{value:"Postgres image",id:"postgres-image",level:3},{value:"MySQL image",id:"mysql-image",level:3},{value:"Test data",id:"test-data",level:3},{value:"Start Connector",id:"start-connector",level:2},{value:"Start Debezium source connector",id:"start-debezium-source-connector",level:3},{value:"Start JDBC sink connector",id:"start-jdbc-sink-connector",level:3}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq-connect-in-action-2"},"RocketMQ Connect in Action 2"),(0,r.yg)("p",null,"PostgreSQL Source(CDC)  -  >RocketMQ Connect  ->  MySQL Sink(JDBC)"),(0,r.yg)("h2",{id:"preparation"},"Preparation"),(0,r.yg)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.yg)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,r.yg)("li",{parentName:"ol"},"Maven 3.2.x+;"),(0,r.yg)("li",{parentName:"ol"},"Start ",(0,r.yg)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME} locational instructions"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"bin-release.zip version\uff1a/rocketmq-all-4.9.4-bin-release"),(0,r.yg)("p",{parentName:"blockquote"},"source-release.zip version\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,r.yg)("h3",{id:"start-connect"},"Start Connect"),(0,r.yg)("h4",{id:"compiling-connector-plugin"},"Compiling Connector Plugin"),(0,r.yg)("p",null,"Debezium RocketMQ Connector"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-debezium/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,r.yg)("p",null,"Move the compiled Debezium PostgreSQL RocketMQ Connector package into the Runtime loading directory. The command is as follows \uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mkdir -p /usr/local/connector-plugins\ncp rocketmq-connect-debezium-postgresql/target/rocketmq-connect-debezium-postgresql-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n")),(0,r.yg)("p",null,"JDBC Connector"),(0,r.yg)("p",null,"Move the compiled JDBC Connector package into the Runtime loading directory. The command is as follows\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-jdbc/\n$ mvn clean package -Dmaven.test.skip=true\ncp rocketmq-connect-jdbc/target/rocketmq-connect-jdbc-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n\n")),(0,r.yg)("h4",{id:"start-connect-runtime"},"Start Connect Runtime"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,r.yg)("p",null,"Modify the configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"connect-standalone.conf"),", the main configuration is as follows"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n# Core configuration, configure the plugin directory of the previously compiled debezium package here\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,r.yg)("h3",{id:"postgres-image"},"Postgres image"),(0,r.yg)("p",null,"Use debezium's Postgres docker environment to set up the Postgres database"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# starting a pg instance\ndocker run -d --name postgres -p 5432:5432 -e POSTGRES_USER=start_data_engineer -e POSTGRES_PASSWORD=password debezium/postgres:14\n\n# bash into postgres instance\ndocker exec -ti postgres /bin/bash\n")),(0,r.yg)("p",null,"Postgres information\nPort\uff1a5432\nAaccount\uff1astart_data_engineer/password\nSynchronize original database\uff1abank.holding\nTarget database table\uff1abank1.holding"),(0,r.yg)("h3",{id:"mysql-image"},"MySQL image"),(0,r.yg)("p",null,"Use debezium's MySQL docker environment to set up the MySQL database."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=debezium -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw quay.io/debezium/example-mysql:1.9\n")),(0,r.yg)("p",null,"MySQL information"),(0,r.yg)("p",null,"Port\uff1a3306"),(0,r.yg)("p",null,"Account\uff1aroot/debezium"),(0,r.yg)("h3",{id:"test-data"},"Test data"),(0,r.yg)("p",null,"Log in to the database with the start_data_engineer/password account"),(0,r.yg)("p",null,"Source database table\uff1abank.holding"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE SCHEMA bank;\nSET search_path TO bank,public;\nCREATE TABLE bank.holding (\n                              holding_id int,\n                              user_id int,\n                              holding_stock varchar(8),\n                              holding_quantity int,\n                              datetime_created timestamp,\n                              datetime_updated timestamp,\n                              primary key(holding_id)\n);\nALTER TABLE bank.holding replica identity FULL;\ninsert into bank.holding values (1000, 1, 'VFIAX', 10, now(), now());\n\\q\ninsert into bank.holding values (1000, 1, 'VFIAX', 10, now(), now());\ninsert into bank.holding values (1001, 2, 'SP500', 1, now(), now());\ninsert into bank.holding values (1003, 3, 'SP500', 1, now(), now());\nupdate bank.holding set holding_quantity = 300 where holding_id=1000;\n\n")),(0,r.yg)("p",null,"Target database table\uff1abank1.holding"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"create database bank1;\nCREATE TABLE holding (\n                          holding_id int,\n                          user_id int,\n                          holding_stock varchar(8),\n                          holding_quantity int,\n                          datetime_created bigint,\n                          datetime_updated bigint,\n                          primary key(holding_id)\n);\n\n")),(0,r.yg)("h2",{id:"start-connector"},"Start Connector"),(0,r.yg)("h3",{id:"start-debezium-source-connector"},"Start Debezium source connector"),(0,r.yg)("p",null,"Synchronize original table data\uff1abank.holding\nPurpose: Parse Postgres binlog and encapsulate it into a common ConnectRecord object, which is sent to the RocketMQ Topic."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/postgres-connector -d  \'{\n  "connector.class": "org.apache.rocketmq.connect.debezium.postgres.DebeziumPostgresConnector",\n  "max.task": "1",\n  "connect.topicname": "debezium-postgres-source-01",\n  "kafka.transforms": "Unwrap",\n  "kafka.transforms.Unwrap.delete.handling.mode": "none",\n  "kafka.transforms.Unwrap.type": "io.debezium.transforms.ExtractNewRecordState",\n  "kafka.transforms.Unwrap.add.headers": "op,source.db,source.table",\n  "database.history.skip.unparseable.ddl": true,\n  "database.server.name": "bankserver1",\n  "database.port": 5432,\n  "database.hostname": "database ip",\n  "database.connectionTimeZone": "UTC",\n  "database.user": "start_data_engineer",\n  "database.dbname": "start_data_engineer",\n  "database.password": "password",\n  "table.whitelist": "bank.holding",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,r.yg)("h3",{id:"start-jdbc-sink-connector"},"Start JDBC sink connector"),(0,r.yg)("p",null,"Purpose: Consume data from the Topic and write it to the target table through JDBC protocol."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/jdbcmysqlsinktest201 -d \'{\n  "connector.class": "org.apache.rocketmq.connect.jdbc.connector.JdbcSinkConnector",\n  "max.task": "2",\n  "connect.topicnames": "debezium-postgres-source-01",\n  "connection.url": "jdbc:mysql://database ip:3306/bank1",\n  "connection.user": "root",\n  "connection.password": "debezium",\n  "pk.fields": "holding_id",\n  "table.name.from.header": "true",\n  "pk.mode": "record_key",\n  "insert.mode": "UPSERT",\n  "db.timezone": "UTC",\n  "table.types": "TABLE",\n  "errors.deadletterqueue.topic.name": "dlq-topic",\n  "errors.log.enable": "true",\n  "errors.tolerance": "ALL",\n  "delete.enabled": "true",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n\n')),(0,r.yg)("p",null,"After the creation of the above two Connector tasks, log in to the database using the start_data_engineer/password account."),(0,r.yg)("p",null,"Any add, delete, or modification made to the source database table ",(0,r.yg)("inlineCode",{parentName:"p"},"bankholding")," will be synced to the target table ",(0,r.yg)("inlineCode",{parentName:"p"},"bank1.holding"),"."))}u.isMDXComponent=!0}}]);