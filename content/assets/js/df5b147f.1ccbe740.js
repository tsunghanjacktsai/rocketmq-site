"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8612],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(y,i(i({ref:t},g),{},{components:a})):r.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const o={},i="Release Manual",l={unversionedId:"contributionGuide/04release-manual",id:"version-5.0/contributionGuide/04release-manual",title:"Release Manual",description:"1. Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/11-contributionGuide/04release-manual.md",sourceDirName:"11-contributionGuide",slug:"/contributionGuide/04release-manual",permalink:"/docs/contributionGuide/04release-manual",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/11-contributionGuide/04release-manual.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"GitHub Submit PR",permalink:"/docs/contributionGuide/03pull-request"}},s={},p=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Apache release documentation",id:"11-apache-release-documentation",level:4},{value:"1.2 PGP signature",id:"12-pgp-signature",level:4},{value:"1.3 POM setting",id:"13-pom-setting",level:4},{value:"1.4 Deal with issues",id:"14-deal-with-issues",level:4},{value:"1.5 Release Notes",id:"15-release-notes",level:4},{value:"2. Build Source Release",id:"2-build-source-release",level:2},{value:"2.1 Check RocketMQ  version",id:"21-check-rocketmq--version",level:4},{value:"2.2 Staging in the ASF Nexus repository",id:"22-staging-in-the-asf-nexus-repository",level:4},{value:"2.3 rc version files",id:"23-rc-version-files",level:4},{value:"2.4 Roll back and retry",id:"24-roll-back-and-retry",level:4},{value:"3. Build binary release",id:"3-build-binary-release",level:2},{value:"4. Version Verification",id:"4-version-verification",level:2},{value:"4.1 Binary Release Verification Checklist",id:"41-binary-release-verification-checklist",level:4},{value:"4.2 Source Release Verification Checklist",id:"42-source-release-verification-checklist",level:4},{value:"4.3 Verification tool",id:"43-verification-tool",level:4},{value:"5. Close staging repo",id:"5-close-staging-repo",level:2},{value:"6. Version election",id:"6-version-election",level:2},{value:"6.1 Community voting",id:"61-community-voting",level:3},{value:"6.2 Result announced",id:"62-result-announced",level:3},{value:"7. Release version",id:"7-release-version",level:2},{value:"8. Version announcement",id:"8-version-announcement",level:2}],g={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"release-manual"},"Release Manual"),(0,n.yg)("h2",{id:"1-introduction"},"1. Introduction"),(0,n.yg)("h4",{id:"11-apache-release-documentation"},"1.1 Apache release documentation"),(0,n.yg)("p",null,"Refer to the following link to understand the ASF release process\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"http://www.apache.org/dev/release-publishing"},"Apache Release Guide")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"http://www.apache.org/dev/release.html"},"Apache Release Policy")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"http://www.apache.org/dev/publishing-maven-artifacts.html"},"Maven Release Info"))),(0,n.yg)("h4",{id:"12-pgp-signature"},"1.2 PGP signature"),(0,n.yg)("p",null,"Follow the Apache release guidelines to sign the release version, users can also use this to determine if the downloaded version has been tampered with."),(0,n.yg)("p",null,"Create a ",(0,n.yg)("inlineCode",{parentName:"p"},"pgp")," key for version signing, use ",(0,n.yg)("strong",{parentName:"p"},"\\<your Apache ID",">","@apache.org")," as the USER-ID for the key"),(0,n.yg)("p",null,"For more details, refer to ",(0,n.yg)("a",{parentName:"p",href:"https://infra.apache.org/release-signing"},"Apache Releases Signing documentation"),"\uff0c",(0,n.yg)("a",{parentName:"p",href:"http://www.apache.org/dev/openpgp.html"},"Cryptography with OpenPGP")),(0,n.yg)("p",null,"Brief process for generating a key\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Generate a new ",(0,n.yg)("inlineCode",{parentName:"li"},"gpg")," key using ",(0,n.yg)("inlineCode",{parentName:"li"},"gpg --gen-key"),", set the key length to 4096 and set it to never expire"),(0,n.yg)("li",{parentName:"ul"},"Upload the key to the public key server using ",(0,n.yg)("inlineCode",{parentName:"li"},"gpg --keyserver keys.openpgp.org --send-key <your key id>")),(0,n.yg)("li",{parentName:"ul"},"Export the public key to a text file using ",(0,n.yg)("inlineCode",{parentName:"li"},"gpg --armor --export <your key id> >> gpgapachekey.txt")),(0,n.yg)("li",{parentName:"ul"},"Obtain the keys of other committers for signing (optional)"),(0,n.yg)("li",{parentName:"ul"},"Add the generated key to the ",(0,n.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/KEYS"},"KEYS file")," (uploaded to the svn repository by the release manager)")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Set the default public key. If you have multiple public keys, modify ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.gnupg/gpg.conf"),".")),(0,n.yg)("p",null,"Refer to the example\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\n...\n# secret key generation directory\ngpg: directory `/root/.gnupg' created\ngpg: new configuration file `/root/.gnupg/gpg.conf' created\ngpg: WARNING: options in `/root/.gnupg/gpg.conf' are not yet active during this run\ngpg: keyring `/root/.gnupg/secring.gpg' created\ngpg: keyring `/root/.gnupg/pubring.gpg' created\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection?\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n# set USER-ID\nReal name: rocketmq\nEmail address: rocketmq@apache.org\nComment: rocketmq\nYou selected this USER-ID:\n    \"rocketmq (rocketmq) <rocketmq@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key.\n\n...\ngpg: /root/.gnupg/trustdb.gpg: trustdb created\ngpg: key 7DE280AF marked as ultimately trusted\npublic and secret key created and signed.\n\ngpg: checking the trustdb\ngpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model\ngpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u\npub   4096R/7DE280AF 2022-07-05\n      Key fingerprint = 421D C10E 9CC3 D261 9F89  C777 86BB 17AA 7DE2 80AF\nuid                  rocketmq (rocketmq) <rocketmq@apache.org>\nsub   4096R/65B9828A 2022-07-05\n")),(0,n.yg)("p",null,"The generated public and private key addresses\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"gpg: keyring `/root/.gnupg/secring.gpg' created\ngpg: keyring `/root/.gnupg/pubring.gpg' created\n")),(0,n.yg)("p",null,"Convert the generated public and private keys to ASCII form\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"gpg --armor --output /root/gpgtest/public-key.txt --export 7DE280AF\ngpg --armor --output /root/gpgtest/private-key.txt --export-secret-keys 7DE280AF\n")),(0,n.yg)("p",null,"View the key list\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# gpg --list-keys\n/root/.gnupg/pubring.gpg\n------------------------\npub   4096R/7DE280AF 2022-07-05\nuid                  rocketmq (rocketmq) <rocketmq@apache.org>\nsub   4096R/65B9828A 2022-07-05\n")),(0,n.yg)("p",null,"Upload the public key to the public key server"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"[root@localhost gpgtest]# gpg --keyserver keys.openpgp.org --send-key 7DE280AF\ngpg: sending key 7DE280AF to hkp server keys.openpgp.org\n")),(0,n.yg)("h4",{id:"13-pom-setting"},"1.3 POM setting"),(0,n.yg)("p",null,"Configure the POM file to deploy the version to the ASF Nexus repository."),(0,n.yg)("p",null,"\u2460 Add Apache POM inheritance default settings"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-XML"},"<parent>\n    <groupId>org.apache</groupId>\n    <artifactId>apache</artifactId>\n    <version>XX</version>\n</parent>\n")),(0,n.yg)("p",null,"\u2461 Add key information to the Maven configuration file ",(0,n.yg)("inlineCode",{parentName:"p"},"settings.xml"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"<settings>\n    <profiles>\n        <profile>\n            <id>signed_release</id>\n            <properties>\n                <mavenExecutorId>forked-path</mavenExecutorId>\n                <gpg.keyname>yourKeyName</gpg.keyname>\n                <deploy.url>https://dist.apache.org/repos/dist/dev/rocketmq/</deploy.url>\n            </properties>\n        </profile>\n    </profiles>\n    <servers>\n        \x3c!-- To publish a snapshot of some part of Maven --\x3e\n        <server>\n            <id>apache.snapshots.https</id>\n            <username>yourApacheID</username>\n            \x3c!-- Use the password encryption by maven --\x3e\n            <password>yourApachePassword</password>\n        </server>\n        \x3c!-- To stage a release of some part of Maven --\x3e\n        <server>\n            <id>apache.releases.https</id>\n            <username>yourApacheID</username>\n            <password>yourApachePassword</password>\n        </server>\n        <server>\n            <id>gpg.passphrase</id>\n            <passphrase>yourKeyPassword</passphrase>\n        </server>\n    </servers>\n</settings>\n")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"It is recommended to use ",(0,n.yg)("a",{parentName:"p",href:"http://maven.apache.org/guides/mini/guide-encryption.html"},"Maven's password encryption capabilities")," to encrypt ",(0,n.yg)("inlineCode",{parentName:"p"},"gpg.passphrase"),".")),(0,n.yg)("p",null,"\u2462 Build artifacts and sign"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"mvn clean install -Papache-release\n")),(0,n.yg)("h4",{id:"14-deal-with-issues"},"1.4 Deal with issues"),(0,n.yg)("p",null,"Resolve JIRA issues and GitHub issues related to this release version."),(0,n.yg)("p",null,"Check that MQVersion is consistent with the released version."),(0,n.yg)("h4",{id:"15-release-notes"},"1.5 Release Notes"),(0,n.yg)("p",null,"Generate Release Notes through ",(0,n.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/ROCKETMQ/"},"RocketMQ JIRA")," and push to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-site"},"rocketmq-site"),", adding a link to the version voting email."),(0,n.yg)("h2",{id:"2-build-source-release"},"2. Build Source Release"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"https://maven.apache.org/maven-release/maven-release-plugin/"},"Maven Release plugin")," version release plugin to release the Artifact to the ASF Nexus staging repository, and after version validation and version voting, copy it to the Apache SVN version repository."),(0,n.yg)("h4",{id:"21-check-rocketmq--version"},"2.1 Check RocketMQ  version"),(0,n.yg)("p",null,"Confirm the MQVersion version and modify it to the correct form if it does not match the ",(0,n.yg)("inlineCode",{parentName:"p"},"release-4.5.0")," form or is inconsistent, and push it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"develop")," branch."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"public static final int CURRENT_VERSION = Version.V4_5_0.ordinal();\n")),(0,n.yg)("h4",{id:"22-staging-in-the-asf-nexus-repository"},"2.2 Staging in the ASF Nexus repository"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Switch to the ",(0,n.yg)("inlineCode",{parentName:"li"},"develop")," branch and confirm that all GitHub PRs related to this version have been merged.")),(0,n.yg)("p",null,"\u2460 Configure the ",(0,n.yg)("inlineCode",{parentName:"p"},"pom.xml")," file"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"<scm>\n    <url>git@github.com:apache/rocketmq.git</url>\n    <connection>scm:git:git@github.com:apache/rocketmq.git</connection>\n    <developerConnection>scm:git:git@github.com:apache/rocketmq.git</developerConnection>\n    <tag>rocketmq-all-x.x.x</tag>\n</scm>\n")),(0,n.yg)("p",null,"\u2461 maven release plugin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"mvn release:clean\nmvn release:prepare\nmvn release:perform\n")),(0,n.yg)("p",null,"Follow this process to place the generated Artifacts in the staging repository.\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"mvn clean release:clean"),": Clear failed builds and discarded versions."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},'mvn release:prepare -Psigned_release -Darguments="-DskipTests"'),"\uff1aUpdate the tag based on the ",(0,n.yg)("inlineCode",{parentName:"li"},"SCM")," property."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},'mvn -Psigned_release release:perform -Darguments="-DskipTests"'),"\uff1aStage the generated artifacts to the ",(0,n.yg)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"Nexus repo"),". You can add the ",(0,n.yg)("inlineCode",{parentName:"li"},"-DdryRun=true")," parameter to perform a dry run.")),(0,n.yg)("p",null,"After completing the above process, you can find the pre-release version Artifacts in the ",(0,n.yg)("inlineCode",{parentName:"p"},"target")," directory of the local branch or in the ",(0,n.yg)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"Nexus staging repo"),"."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"To only release the source code version, only keep the source code and related jar files, and use the ",(0,n.yg)("inlineCode",{parentName:"p"},"delete")," option in the Nexus GUI to delete the other artifacts.")),(0,n.yg)("h4",{id:"23-rc-version-files"},"2.3 rc version files"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Before the pre-release version vote is passed, it will be staged in ",(0,n.yg)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/rocketmq/"},"/dev/rocketmq")," and stored in the ",(0,n.yg)("inlineCode",{parentName:"p"},"x.x.x-rcx/")," directory. The following files are required\uff1a"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-bin-release.zip  "),(0,n.yg)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-bin-release.zip.asc  "),(0,n.yg)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-bin-release.zip.sha512  "),(0,n.yg)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-source-release.zip  "),(0,n.yg)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-source-release.zip.asc  "),(0,n.yg)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-source-release.zip.sha512  ")))),(0,n.yg)("p",null,"Generate signature and verification files using the ",(0,n.yg)("inlineCode",{parentName:"p"},"gpg")," command\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Generate ",(0,n.yg)("inlineCode",{parentName:"p"},"asc")," file"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"gpg --clearsign rocketmq-all-x1.x2.x3-bin-release.zip\ngpg --clearsign rocketmq-all-x1.x2.x3-source-release.zip\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Generate ",(0,n.yg)("inlineCode",{parentName:"p"},"sha512")," file"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"gpg --print-md SHA512 rocketmq-all-x1.x2.x3-bin-release.zip > rocketmq-all-x1.x2.x3-bin-release.zip.sha512\ngpg --print-md SHA512 rocketmq-all-x1.x2.x3-source-release.zip >  rocketmq-all-x1.x2.x3-source-release.zip.sha512\n")))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The source code and binary versions should begin with ",(0,n.yg)("inlineCode",{parentName:"p"},"rocketmq-all")," to facilitate the ",(0,n.yg)("a",{target:"_blank",href:"https://github.com/apache/rocketmq-docker/blob/a2672f62cc5171263ffc856ab5657291efba1912/image-build/Dockerfile-centos#L58-L59"},"RocketMQ Docker Build"),".")),(0,n.yg)("h4",{id:"24-roll-back-and-retry"},"2.4 Roll back and retry"),(0,n.yg)("p",null,"If there are problems with the staging process, roll back according to the following process\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delete the tag created in step 2.2"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"List all tags and find the most recently created one"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git tag -ln\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delete the tag from the local repository"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git tag -d rocketmq-all-x1.x2.x3\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Push the update to GitHub"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git push origin :refs/tags/rocketmq-all-x1.x2.x3\n"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delete the commit records in the development branch from step 2.2"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"List the git log"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git log\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Find the most recent commit record and label it as follows\uff1a"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"des1: ","[maven-release-plugin]"," prepare release rocketmq-all-4.9.2]  "),(0,n.yg)("p",{parentName:"blockquote"},"des2: ","[maven-release-plugin]"," prepare for next development iteration]"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delete commits"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git reset --hard commit-id\ngit push origin HEAD --force\n"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delete the version to be rolled back in ",(0,n.yg)("a",{parentName:"p",href:"https://repository.apache.org/#welcome"},"Nexus"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Roll back to step 2.1 and redo"))),(0,n.yg)("h2",{id:"3-build-binary-release"},"3. Build binary release"),(0,n.yg)("p",null,"Both the binary and source code versions are built from the same code branch, but you should be aware of the operating system version."),(0,n.yg)("p",null,"Some dependencies, such as ",(0,n.yg)("inlineCode",{parentName:"p"},"netty tc-native"),", are sensitive to the operating system."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Make sure you check out the pre-release version branch"),(0,n.yg)("li",{parentName:"ul"},"Make sure all unit tests pass with ",(0,n.yg)("inlineCode",{parentName:"li"},"mvn clean install")),(0,n.yg)("li",{parentName:"ul"},"Make sure all integration tests pass with ",(0,n.yg)("inlineCode",{parentName:"li"},"mvn clean install -Pit-test"))),(0,n.yg)("p",null,"After successful build, you also need to generate .asc and .sha512 files, and after verification and voting, finally copy them to the ",(0,n.yg)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/rocketmq/"},"svn")," repository."),(0,n.yg)("h2",{id:"4-version-verification"},"4. Version Verification"),(0,n.yg)("h4",{id:"41-binary-release-verification-checklist"},"4.1 Binary Release Verification Checklist"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Check the operating system for the build dependencies, netty-tcnative is sensitive to the operating system"),(0,n.yg)("li",{parentName:"ul"},"Ensure the license is Apache V2  "),(0,n.yg)("li",{parentName:"ul"},"If third-party dependencies are introduced, update the NOTICE"),(0,n.yg)("li",{parentName:"ul"},"Extract the compressed file to check that the version is correct"),(0,n.yg)("li",{parentName:"ul"},"Validate the ASC signature, SHA512 digest"),(0,n.yg)("li",{parentName:"ul"},"Run the Quick-Start to start the nameserver and broker"),(0,n.yg)("li",{parentName:"ul"},"Run the clusterList command to check that the version is correct"),(0,n.yg)("li",{parentName:"ul"},"Make sure there are no nohup.out files")),(0,n.yg)("h4",{id:"42-source-release-verification-checklist"},"4.2 Source Release Verification Checklist"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ensure the license is Apache V2"),(0,n.yg)("li",{parentName:"ul"},"If third-party dependencies are introduced, update the NOTICE"),(0,n.yg)("li",{parentName:"ul"},"Extract the compressed file to check that the version is correct"),(0,n.yg)("li",{parentName:"ul"},"Validate the ASC signature, SHA512 digest"),(0,n.yg)("li",{parentName:"ul"},"Compile the source code and run the Quick-Start to start the nameserver and broker"),(0,n.yg)("li",{parentName:"ul"},"Run the clusterList command to check the version is correct")),(0,n.yg)("h4",{id:"43-verification-tool"},"4.3 Verification tool"),(0,n.yg)("p",null,"Follow the steps below to verify the GPG signature and SHA512 digest."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download the release packages, the ",(0,n.yg)("inlineCode",{parentName:"p"},".asc")," file, and the ",(0,n.yg)("inlineCode",{parentName:"p"},".sha512")," file.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"On a Unix system, run the following command\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"for file in `find . -type f -iname '*.asc'`\ndo\n    gpg --verify ${file} \ndone\n")),(0,n.yg)("p",{parentName:"li"}," or"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"gpg --verify rocketmq-all-%version-number%-source-release.zip.asc rocketmq-all-%version-number%-bin-release.zip\n")),(0,n.yg)("p",{parentName:"li"},"If you see ",(0,n.yg)("inlineCode",{parentName:"p"},"Good signature"),", the signature is correct."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"gpg: Good signature from ... gpg: Signature made ...\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Verify the consistency of the version based on the SHA512."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"gpg --print-md SHA512 rocketmq-all-%version-number%-source-release.zip \ngpg --print-md SHA512 rocketmq-all-%version-number%-bin-release.zip \n")))),(0,n.yg)("h2",{id:"5-close-staging-repo"},"5. Close staging repo"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"After the pre-release version has completed the checklist verification, close the Nexus staging repository and prepare for the version election."),(0,n.yg)("li",{parentName:"ol"},"Select the ",(0,n.yg)("inlineCode",{parentName:"li"},"orgapacherocketmq-XXX")," pending release version on Nexus and click the ",(0,n.yg)("inlineCode",{parentName:"li"},"Close")," icon to close the staging repository."),(0,n.yg)("li",{parentName:"ol"},"Before closing, Nexus will perform a series of signature verifications and text checks."),(0,n.yg)("li",{parentName:"ol"},'If the verification is successful, Nexus will close the repository and provide the staging repository URL, which is marked as "The staging repo" in the election email.'),(0,n.yg)("li",{parentName:"ol"},"If the verification fails, fix the issues, roll back, and re-execute the release process."),(0,n.yg)("li",{parentName:"ol"},"If all of the above work is complete, use SVN to copy it to the ",(0,n.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/"},"/dev/rocketmq")," Apache remote repository.")),(0,n.yg)("h2",{id:"6-version-election"},"6. Version election"),(0,n.yg)("p",null,"The RocketMQ community conducts version elections through the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"mailto:dev@rocketmq.apache.org"},"dev@rocketmq.apache.org"))," email list."),(0,n.yg)("p",null,"Refer to the ",(0,n.yg)("a",{parentName:"p",href:"http://www.apache.org/foundation/voting.html"},"voting process")," to understand the Apache voting process."),(0,n.yg)("h3",{id:"61-community-voting"},"6.1 Community voting"),(0,n.yg)("p",null,"Email list\uff1a",(0,n.yg)("a",{parentName:"p",href:"mailto:dev@rocketmq.apache.org"},"dev list")),(0,n.yg)("p",null,"Email topic\uff1a",(0,n.yg)("strong",{parentName:"p"},"[VOTE]",": Release Apache RocketMQ \\<release-version",">"," RC\\<RC Number",">")," "),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Hello RocketMQ Community,  "),(0,n.yg)("p",{parentName:"blockquote"},"This is the vote for \\<release version",">"," of Apache RocketMQ.  "),(0,n.yg)("p",{parentName:"blockquote"},"${A brief introduction to RocketMQ and the features of this release.}"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"The artifacts:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/rocketmq/$%7Brelease"},"https://dist.apache.org/repos/dist/dev/rocketmq/${release")," version}"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"The staging repo:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://repository.apache.org/content/repositories/orgapacherocketmq-XXX/"},"https://repository.apache.org/content/repositories/orgapacherocketmq-XXX/")),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Git tag for the release:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"\\<link to the tag of GitHub repo",">","  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Hash for the release tag:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"\\<Hash value of the release tag",">","  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Release Notes:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"\\<insert link to the rocketmq release notes",">","  "),(0,n.yg)("p",{parentName:"blockquote"},"The artifacts have been signed with Key : \\<ID of signing key",">",", which can be found in the keys file:  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/rocketmq/KEYS"},"https://dist.apache.org/repos/dist/dev/rocketmq/KEYS"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"The vote will be open for at least 72 hours or until necessary number of votes are reached.  "),(0,n.yg)("p",{parentName:"blockquote"},"Please vote accordingly:  "),(0,n.yg)("p",{parentName:"blockquote"},"[ ]"," +1  approve    "),(0,n.yg)("p",{parentName:"blockquote"},"[ ]"," +0  no opinion    "),(0,n.yg)("p",{parentName:"blockquote"},"[ ]"," -1  disapprove with the reason    "),(0,n.yg)("p",{parentName:"blockquote"},"Thanks,  "),(0,n.yg)("p",{parentName:"blockquote"},"The Apache RocketMQ Team  ")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Hash for the release tag: You can use the commit id.")),(0,n.yg)("h3",{id:"62-result-announced"},"6.2 Result announced"),(0,n.yg)("p",null,"After 72 hours, if there are at least 3 votes in favor and no votes against, send the following email to celebrate the release of the version."),(0,n.yg)("p",null,"Email topic\uff1a",(0,n.yg)("strong",{parentName:"p"},"[RESULT][VOTE]",": Release Apache RocketMQ \\<release-version",">"," RC\\<RC Number",">")," "),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Hello RocketMQ Community,  "),(0,n.yg)("p",{parentName:"blockquote"},"The Apache RocketMQ ",(0,n.yg)("inlineCode",{parentName:"p"},"<release version>")," vote is now closed and has passed with ","[number]"," binding +1s, ","[number]"," non-binding +1s and no 0 or -1:  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Binding votes +1s:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"User Name (Apache ID)    "),(0,n.yg)("p",{parentName:"blockquote"},"User Name (Apache ID)    "),(0,n.yg)("p",{parentName:"blockquote"},"User Name (Apache ID)    "),(0,n.yg)("p",{parentName:"blockquote"},"...."),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Non-binding votes +1s:"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"User Name (Apache ID) "),(0,n.yg)("p",{parentName:"blockquote"},"....  "),(0,n.yg)("p",{parentName:"blockquote"},"The release will be published soon.  "),(0,n.yg)("p",{parentName:"blockquote"},"Thanks,   "),(0,n.yg)("p",{parentName:"blockquote"},"The Apache RocketMQ Team")),(0,n.yg)("p",null,"If the vote does not pass, fix the issues, roll back, increase the RC number, restart the release process, and re-initiate the version voting process."),(0,n.yg)("p",null,"Update email topic\uff1a",(0,n.yg)("strong",{parentName:"p"},"[RESTART][VOTE]","[#","]",": Release Apache RocketMQ \\<release-version",">"," RC\\<RC Number",">")),(0,n.yg)("h2",{id:"7-release-version"},"7. Release version"),(0,n.yg)("p",null,"After the Apache RocketMQ PMC vote passes, release the version to the Maven Nexus repository and the Apache version repository."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Publish to Nexus repository, select the ",(0,n.yg)("strong",{parentName:"li"},"orgapacherocketmq-XXX")," in the staging area and click the ",(0,n.yg)("inlineCode",{parentName:"li"},"Release")," icon to publish."),(0,n.yg)("li",{parentName:"ol"},"Publish to the Apache version repository, use SVN to copy the version to ",(0,n.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/"},"/release/rocketmq")),(0,n.yg)("li",{parentName:"ol"},"Merge the ",(0,n.yg)("inlineCode",{parentName:"li"},"develop")," branch of ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq"},"Apache RocketMQ")," into the ",(0,n.yg)("inlineCode",{parentName:"li"},"master")," branch."),(0,n.yg)("li",{parentName:"ol"},"Add release notes to ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/releases"},"Releases \xb7 apache/rocketmq"),"."),(0,n.yg)("li",{parentName:"ol"},"Create a new branch and name it ",(0,n.yg)("inlineCode",{parentName:"li"},"release-x.x.x"),"."),(0,n.yg)("li",{parentName:"ol"},"Update ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site"},"apache/rocketmq-site")," Official Website Home Page",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Add release note\uff0crefer to  ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site/commit/4b662a197a0a77fd460614df9e231e6ffdd7c622"},"4.9.3 release notes")," "),(0,n.yg)("li",{parentName:"ul"},"Update release note\uff0crefer to ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site/commit/0fd4d231c06f1d641a0cc30f8ffe22775043e89d"},"docs updates for 4.9.3"))))),(0,n.yg)("h2",{id:"8-version-announcement"},"8. Version announcement"),(0,n.yg)("p",null,"Email list\uff1a",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"mailto:announce@apache.org"},"announce@apache.org")),", ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"mailto:users@rocketmq.apache.org"},"users@rocketmq.apache.org")),", "),(0,n.yg)("p",null,"\u200b\t\t\t\t ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"mailto:private@rocketmq.apache.org"},"private@rocketmq.apache.org")),", ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"mailto:dev@rocketmq.apache.org"},"dev@rocketmq.apache.org"))," "),(0,n.yg)("p",null,"Email topic\uff1a ",(0,n.yg)("strong",{parentName:"p"},"[ANNOUNCE]"," Release Apache RocketMQ \\<release-version",">")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Hi all,"),(0,n.yg)("p",{parentName:"blockquote"},"The Apache RocketMQ team would like to announce the release of Apache RocketMQ \\<release version",">",".  "),(0,n.yg)("p",{parentName:"blockquote"},"${A brief introduction to RocketMQ and the features of this release.}"),(0,n.yg)("p",{parentName:"blockquote"},"More details regarding Apache RocketMQ can be found at:  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"http://rocketmq.apache.org/"},"http://rocketmq.apache.org/"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"The release artifacts can be downloaded here:  "),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/rocketmq/$%7Brelease-version%7D"},"https://dist.apache.org/repos/dist/release/rocketmq/${release-version}"),"  "),(0,n.yg)("p",{parentName:"blockquote"},"The release notes can be found here:  "),(0,n.yg)("p",{parentName:"blockquote"},"\\<insert link to the rocketmq release notes",">","  "),(0,n.yg)("p",{parentName:"blockquote"},"Thanks,  "),(0,n.yg)("p",{parentName:"blockquote"},"The Apache RocketMQ Team")))}m.isMDXComponent=!0}}]);