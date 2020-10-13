(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{485:function(t,a,e){"use strict";e.r(a);var r=e(14),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hbase"}},[t._v("#")]),t._v(" HBase")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E7%AE%80%E4%BB%8B"}},[t._v("简介")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9F%BA%E7%A1%80"}},[t._v("基础")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8E%9F%E7%90%86"}},[t._v("原理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B"}},[t._v("数据模型")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#hbase-%E6%9E%B6%E6%9E%84"}},[t._v("HBase 架构")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#hbase-%E5%92%8C-rdbms"}},[t._v("HBase 和 RDBMS")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E9%99%84%E5%BD%95"}},[t._v("附录")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C"}},[t._v("命令行")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%9B%B4%E5%A4%9A%E5%86%85%E5%AE%B9"}},[t._v("更多内容")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E6%89%A9%E5%B1%95%E9%98%85%E8%AF%BB"}},[t._v("扩展阅读")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])])])]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("HBase 是建立在 HDFS 基础上的面向列的分布式数据库。")]),t._v(" "),e("ul",[e("li",[t._v("HBase 参考了谷歌的 BigTable 建模，实现的编程语言为 Java。")]),t._v(" "),e("li",[t._v("它是 Hadoop 项目的子项目，运行于 HDFS 文件系统之上。")])]),t._v(" "),e("p",[t._v("HBase 适用场景：实时地随机访问超大数据集。")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP 理论"),e("OutboundLink")],1),t._v("中，HBase 属于 CP 类型的系统。")]),t._v(" "),e("h2",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/nosql/hbase-ops.html"}},[t._v("HBase 维护")])],1),t._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("h3",{attrs:{id:"数据模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),e("p",[t._v("HBase 是一个面向列的数据库，在表中它由行排序。")]),t._v(" "),e("p",[t._v("HBase 表模型结构为：")]),t._v(" "),e("ul",[e("li",[t._v("表（table）是行的集合。")]),t._v(" "),e("li",[t._v("行（row）是列族的集合。")]),t._v(" "),e("li",[t._v("列族（column family）是列的集合。")]),t._v(" "),e("li",[t._v("列（row）是键值对的集合。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551164163369.png!zp",alt:"img"}})]),t._v(" "),e("p",[t._v("HBase 表的单元格（cell）由行和列的坐标交叉决定，是有版本的。默认情况下，版本号是自动分配的，为 HBase 插入单元格时的时间戳。单元格的内容是未解释的字节数组。")]),t._v(" "),e("p",[t._v("行的键也是未解释的字节数组，所以理论上，任何数据都可以通过序列化表示成字符串或二进制，从而存为 HBase 的键值。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551164224778.png!zp",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"hbase-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hbase-架构"}},[t._v("#")]),t._v(" HBase 架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551164744748.png!zp",alt:"img"}})]),t._v(" "),e("p",[t._v("和 HDFS、YARN 一样，HBase 也采用 master / slave 架构：")]),t._v(" "),e("ul",[e("li",[t._v("HBase 有一个 master 节点。master 节点负责将区域（region）分配给 region 节点；恢复 region 节点的故障。")]),t._v(" "),e("li",[t._v("HBase 有多个 region 节点。region 节点负责零个或多个区域（region）的管理并相应客户端的读写请求。region 节点还负责区域的划分并通知 master 节点有了新的子区域。")])]),t._v(" "),e("p",[t._v("HBase 依赖 ZooKeeper 来实现故障恢复。")]),t._v(" "),e("h4",{attrs:{id:"regin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regin"}},[t._v("#")]),t._v(" Regin")]),t._v(" "),e("p",[t._v("HBase 表按行键范围水平自动划分为区域（region）。每个区域由表中行的子集构成。每个区域由它所属的表、它所含的第一行及最后一行来表示。")]),t._v(" "),e("p",[e("strong",[t._v("区域只不过是表被拆分，并分布在区域服务器。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551165887616.png!zp",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"master-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master-服务器"}},[t._v("#")]),t._v(" Master 服务器")]),t._v(" "),e("p",[t._v("区域分配、DDL(create、delete)操作由 HBase master 服务器处理。")]),t._v(" "),e("ul",[e("li",[t._v("master 服务器负责协调 region 服务器\n"),e("ul",[e("li",[t._v("协助区域启动，出现故障恢复或负载均衡情况时，重新分配 region 服务器")]),t._v(" "),e("li",[t._v("监控集群中的所有 region 服务器")])])]),t._v(" "),e("li",[t._v("支持 DDL 接口（创建、删除、更新表）")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551166513572.png!zp",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"regin-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regin-服务器"}},[t._v("#")]),t._v(" Regin 服务器")]),t._v(" "),e("p",[t._v("区域服务器运行在 HDFS 数据节点上，具有以下组件")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("WAL")]),t._v(" - Write Ahead Log 是 HDFS 上的文件。WAL 存储尚未持久存储到永久存储的新数据，它用于在发生故障时进行恢复。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("BlockCache")]),t._v(" - 是读缓存。它将频繁读取的数据存储在内存中。至少最近使用的数据在完整时被逐出。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("MemStore")]),t._v(" - 是写缓存。它存储尚未写入磁盘的新数据。在写入磁盘之前对其进行排序。每个区域每个列族有一个 MemStore。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Hfiles")]),t._v(" - 将行存储为磁盘上的排序键值对。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551166602999.png!zp",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[t._v("#")]),t._v(" ZooKeeper")]),t._v(" "),e("p",[t._v("HBase 使用 ZooKeeper 作为分布式协调服务来维护集群中的服务器状态。Zookeeper 维护哪些服务器是活动的和可用的，并提供服务器故障通知。集群至少应该有 3 个节点。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/hbase/1551166447147.png!zp",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"hbase-和-rdbms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hbase-和-rdbms"}},[t._v("#")]),t._v(" HBase 和 RDBMS")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("HBase")]),t._v(" "),e("th",[t._v("RDBMS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("HBase 无模式，它不具有固定列模式的概念;仅定义列族。")]),t._v(" "),e("td",[t._v("RDBMS 有它的模式，描述表的整体结构的约束。")])]),t._v(" "),e("tr",[e("td",[t._v("它专门创建为宽表。 HBase 是横向扩展。")]),t._v(" "),e("td",[t._v("这些都是细而专为小表。很难形成规模。")])]),t._v(" "),e("tr",[e("td",[t._v("没有任何事务存在于 HBase。")]),t._v(" "),e("td",[t._v("RDBMS 是事务性的。")])]),t._v(" "),e("tr",[e("td",[t._v("它反规范化的数据。")]),t._v(" "),e("td",[t._v("它具有规范化的数据。")])]),t._v(" "),e("tr",[e("td",[t._v("它用于半结构以及结构化数据是非常好的。")]),t._v(" "),e("td",[t._v("用于结构化数据非常好。")])])])]),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("p",[t._v("Java API 归纳总结在这里："),e("RouterLink",{attrs:{to:"/nosql/hbase-api-java.html"}},[t._v("Hbase Java API")])],1),t._v(" "),e("h2",{attrs:{id:"附录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),e("h3",{attrs:{id:"命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[t._v("#")]),t._v(" 命令行")]),t._v(" "),e("p",[t._v("HBase 命令行可以参考这里："),e("RouterLink",{attrs:{to:"/nosql/hbase-cli.html"}},[t._v("HBase 命令行")])],1),t._v(" "),e("h2",{attrs:{id:"更多内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多内容"}},[t._v("#")]),t._v(" 更多内容")]),t._v(" "),e("h3",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/nosql/hbase-cli.html"}},[t._v("HBase 命令")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/nosql/hbase-ops.html"}},[t._v("HBase 配置")])],1)]),t._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("h4",{attrs:{id:"官方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方"}},[t._v("#")]),t._v(" 官方")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HBase 官网"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hbase.apache.org/book.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HBase 官方文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://abloz.com/hbase/book.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HBase 官方文档中文版"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hbase.apache.org/apidocs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HBase API"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[t._v("#")]),t._v(" 文章")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/bigtable-osdi06.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bigtable: A Distributed Storage System for Structured Data"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mapr.com/blog/in-depth-look-hbase-architecture",target:"_blank",rel:"noopener noreferrer"}},[t._v("An In-Depth Look at the HBase Architecture"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);