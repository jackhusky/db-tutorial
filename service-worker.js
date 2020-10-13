/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5322f0c221838d403d358255397b604c"
  },
  {
    "url": "assets/css/0.styles.634a41a8.css",
    "revision": "e919ec314a87039e96e7ef34505fff4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6b2ec097.js",
    "revision": "ec9c7ba9b49352f75f416031826f893c"
  },
  {
    "url": "assets/js/11.fe247a47.js",
    "revision": "2793ccfb8ec80ff0bedbb294e471bd94"
  },
  {
    "url": "assets/js/12.e26c5b2b.js",
    "revision": "bde291f8cd2ff3dc9e72c782015219df"
  },
  {
    "url": "assets/js/13.2ea5597a.js",
    "revision": "ce761a4012962176502551e1194a19b1"
  },
  {
    "url": "assets/js/14.c4329e96.js",
    "revision": "8ce66f1a0e29f0f3ad122c60067b3502"
  },
  {
    "url": "assets/js/15.abd00e69.js",
    "revision": "c9a9c20cc264b8628441b7e25271201a"
  },
  {
    "url": "assets/js/16.f2fb3266.js",
    "revision": "6f3763b8dbd246c209bb941c8f44b888"
  },
  {
    "url": "assets/js/17.ca8c65ee.js",
    "revision": "e03ed9eac5a8e9fcec2ac5cd5b4c9d09"
  },
  {
    "url": "assets/js/18.e65a545a.js",
    "revision": "86d840660e51817a2e8d1e321f1de5a0"
  },
  {
    "url": "assets/js/19.80ebef0a.js",
    "revision": "34b203d3649b79b263ec512c287798a5"
  },
  {
    "url": "assets/js/20.4f4377f5.js",
    "revision": "d1a2d4eb51d005e3e7adcedc91aa2716"
  },
  {
    "url": "assets/js/21.0983e68b.js",
    "revision": "1276d7167e1a6e03f5c914ebcc79af12"
  },
  {
    "url": "assets/js/22.22549083.js",
    "revision": "059a150c21acfa4d0cc6edbf86f92b42"
  },
  {
    "url": "assets/js/23.4cd8f92b.js",
    "revision": "001379e517d772bceb8cac5f27c1508e"
  },
  {
    "url": "assets/js/24.e6a7e02c.js",
    "revision": "cf0f6cf6214be83dee1e97abfe861db6"
  },
  {
    "url": "assets/js/25.fc3242b3.js",
    "revision": "cce2393fcf9e772ab2103e6f774d7daa"
  },
  {
    "url": "assets/js/26.2b1e6a49.js",
    "revision": "6064b7ae6d3a4b624a6aeeee0e87a103"
  },
  {
    "url": "assets/js/27.e1993f74.js",
    "revision": "7da105110d59b8d5455c242e13212ecb"
  },
  {
    "url": "assets/js/28.bd52979c.js",
    "revision": "1a4497a694dd2b5d5ddf12a617b0c943"
  },
  {
    "url": "assets/js/29.3062fb0d.js",
    "revision": "b37097777674d43d35cd77d537828723"
  },
  {
    "url": "assets/js/30.cf6658ff.js",
    "revision": "59b3ab54ff59c8b032c3c9b30d69d27a"
  },
  {
    "url": "assets/js/31.579bfba3.js",
    "revision": "625b2b46727c3fcfca30faf885c2813b"
  },
  {
    "url": "assets/js/32.760e57b8.js",
    "revision": "56f3884903f90328dc634967d4726ae8"
  },
  {
    "url": "assets/js/33.6bacc202.js",
    "revision": "31e90470cb4c4b455af999a3927593ca"
  },
  {
    "url": "assets/js/34.cf51b09b.js",
    "revision": "9809efa69ff963db77fa221accb26df9"
  },
  {
    "url": "assets/js/35.b5c3639e.js",
    "revision": "a2fabe7abd11e072f05f604d4e8fb63c"
  },
  {
    "url": "assets/js/36.296d25a5.js",
    "revision": "67920e48b96eb6937cfba32527214fba"
  },
  {
    "url": "assets/js/37.273ae643.js",
    "revision": "edd107aebb4330b4633917f36e341d01"
  },
  {
    "url": "assets/js/38.cc9c86d4.js",
    "revision": "3b970ce5b2e66f4c1449c9e4af2b421d"
  },
  {
    "url": "assets/js/39.7ede2256.js",
    "revision": "2a407612a2c7ef83e77a529db74b5f42"
  },
  {
    "url": "assets/js/4.af39a5fc.js",
    "revision": "9d72a258bb3988b99ed2529592a47228"
  },
  {
    "url": "assets/js/40.24d223a3.js",
    "revision": "1903d9a529d29e91e030dbf5d873a29b"
  },
  {
    "url": "assets/js/41.d258cb86.js",
    "revision": "113b089fa4aefea06d528329ed79e57d"
  },
  {
    "url": "assets/js/42.ba081766.js",
    "revision": "e7eac3aa8d04e3d7b5126a3db1ae7f7b"
  },
  {
    "url": "assets/js/43.725edc07.js",
    "revision": "7fc34bc6352c7109e5cfe9b35148551e"
  },
  {
    "url": "assets/js/44.b674669d.js",
    "revision": "7d636cf619a8cd06e352a320b40ecda9"
  },
  {
    "url": "assets/js/45.8f1d6536.js",
    "revision": "2ac82c7b0f138990ab103acd6cd844b2"
  },
  {
    "url": "assets/js/46.6e80620c.js",
    "revision": "e5a247a09c345ba92ab9fee85638a897"
  },
  {
    "url": "assets/js/47.171574eb.js",
    "revision": "fbe4aa9bf2875280f81c0c45e07ca50d"
  },
  {
    "url": "assets/js/48.8e9f5f77.js",
    "revision": "4eb62f94cfa6e9f980c41c091684c076"
  },
  {
    "url": "assets/js/49.be5d55cf.js",
    "revision": "294ae10bca579af75d71bfdd4830b209"
  },
  {
    "url": "assets/js/5.0833ef28.js",
    "revision": "f02130302a6400abd9da09bb58d0cbbf"
  },
  {
    "url": "assets/js/50.47613447.js",
    "revision": "7cad58f15401eebdfb06f1747225c348"
  },
  {
    "url": "assets/js/51.2d41393b.js",
    "revision": "954d5be90c9ecda5e393df088f665cf9"
  },
  {
    "url": "assets/js/52.fd1c4457.js",
    "revision": "008336565ba50559d2f630c26bdf2667"
  },
  {
    "url": "assets/js/53.4110063d.js",
    "revision": "249eff7a976d4ad0a777ec3bc3662d92"
  },
  {
    "url": "assets/js/54.605fb79c.js",
    "revision": "ed7013efd60bde26c685aadab208973c"
  },
  {
    "url": "assets/js/55.5e21fc50.js",
    "revision": "2866dc9942d855e49ebc5fc453b1f9b4"
  },
  {
    "url": "assets/js/56.63d90acc.js",
    "revision": "5380286146389cd8dd0da48b7834d2d5"
  },
  {
    "url": "assets/js/57.e4e93067.js",
    "revision": "5eae7696838b243e2c13fd30fd32b978"
  },
  {
    "url": "assets/js/58.e78118bb.js",
    "revision": "b9302188408b637e26e20098d6688462"
  },
  {
    "url": "assets/js/59.d7cb0130.js",
    "revision": "f3476811545a8a55201d2a502a9ff839"
  },
  {
    "url": "assets/js/6.278670fd.js",
    "revision": "1ba9ea796f34d818b3d33cc030dd24df"
  },
  {
    "url": "assets/js/60.a013e1eb.js",
    "revision": "9a08c03f97610b3838a0ab773e035822"
  },
  {
    "url": "assets/js/61.c22d11d4.js",
    "revision": "3ad8cc2860db12f852d6c638b6bc6ced"
  },
  {
    "url": "assets/js/62.f169c057.js",
    "revision": "f389cfaf42445ae0f98b8f5ca3c9adf3"
  },
  {
    "url": "assets/js/63.70d5a041.js",
    "revision": "c680401f9ef1d8dd1423d2c50d5b1ad5"
  },
  {
    "url": "assets/js/64.c4586b91.js",
    "revision": "9edad730c8a3a5a0fb15dfcfd090230d"
  },
  {
    "url": "assets/js/65.7e7aec26.js",
    "revision": "972e9bff3b38b16b2e6688343af19276"
  },
  {
    "url": "assets/js/66.ec0b0ee4.js",
    "revision": "dcfc1d007ec99aeaaefbc38bb13bdef3"
  },
  {
    "url": "assets/js/67.dca67a56.js",
    "revision": "c6b47a4a6160dc25db1262572678df19"
  },
  {
    "url": "assets/js/68.d16570b7.js",
    "revision": "5caed20c9c70a4d35f212f83d9a8cfd3"
  },
  {
    "url": "assets/js/69.67735e91.js",
    "revision": "10c3cb231e56c399cdfb153afe78aee1"
  },
  {
    "url": "assets/js/7.a10910a7.js",
    "revision": "3d5618e598f158adc02297601b8e0066"
  },
  {
    "url": "assets/js/8.04e2e190.js",
    "revision": "05fa6d6c159203978cd5a3924e1b3bd2"
  },
  {
    "url": "assets/js/9.cccc2c89.js",
    "revision": "91125e3cb3621724e2846dcc650ad57b"
  },
  {
    "url": "assets/js/app.f29cbebc.js",
    "revision": "cdea3bae1ab9c9a27cfd8862440b990a"
  },
  {
    "url": "assets/js/vendors~flowchart.d81c2c68.js",
    "revision": "51049100cc429d6563ab37daf02431d4"
  },
  {
    "url": "assets/js/vendors~notification.4573acaf.js",
    "revision": "71be7d6c83e261cd535a7a4bea6a2438"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "bb1a4b283b42cf90f17df5cbb4520080"
  },
  {
    "url": "middleware/flyway.html",
    "revision": "0f1271effecaf81d948799b5263cb796"
  },
  {
    "url": "middleware/shardingsphere-jdbc.html",
    "revision": "a7b843d5f8865f70e9ed2f237f6bf20b"
  },
  {
    "url": "middleware/shardingsphere.html",
    "revision": "92a202a7340ecce1cbc68c8193b89c6e"
  },
  {
    "url": "nosql/cassandra.html",
    "revision": "db3ee0878ad58c2064aabd28e17b1c1f"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats-ops.html",
    "revision": "745d729350422b686c28f78b4e34fc0c"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats.html",
    "revision": "dc746d252a14c3940b92a94e2e1f3673"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana-ops.html",
    "revision": "d4e1a11cfaa6a7a967951f2cca666807"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana.html",
    "revision": "011ae87938a2a59bda55d7352ee86183"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash-ops.html",
    "revision": "1e7c40ff340a662a1ea909e6bc9d35b3"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash.html",
    "revision": "1e3b0204c1c475becff9580d4b7935d8"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-quickstart.html",
    "revision": "93235c5e6dd56b14bd5b20cd66ccf817"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-api.html",
    "revision": "42c5a51afd2f58e4d28e61979764741f"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-interview.html",
    "revision": "86e61d7b5c56a479481ffdd119a381a7"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-ops.html",
    "revision": "4c72acf13f518c328bb895395daec0f9"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-quickstart.html",
    "revision": "953df3408680aa97d99ec7de6d63e09b"
  },
  {
    "url": "nosql/elasticsearch/index.html",
    "revision": "69ef5c318ad297f02c809f0fdcab911b"
  },
  {
    "url": "nosql/hbase.html",
    "revision": "cabc82f476de2da1e38824b386a01097"
  },
  {
    "url": "nosql/index.html",
    "revision": "3cd0b0c1ca118f31952cdec8435ed778"
  },
  {
    "url": "nosql/mongodb/index.html",
    "revision": "480202ddb60d7a63bc3fc84132f09bfb"
  },
  {
    "url": "nosql/mongodb/mongodb-aggregation.html",
    "revision": "1d1abd82febe24b3c8dc8d5a2363192a"
  },
  {
    "url": "nosql/mongodb/mongodb-crud.html",
    "revision": "6ac64c9e44a8feda1912773dfec27215"
  },
  {
    "url": "nosql/mongodb/mongodb-index.html",
    "revision": "96928e005d015d553470e0d25f04d07e"
  },
  {
    "url": "nosql/mongodb/mongodb-model-example.html",
    "revision": "a4f64fd4616ec57dadfbcbcf2327a6d0"
  },
  {
    "url": "nosql/mongodb/mongodb-model.html",
    "revision": "684f9270bf20a039b15287dda90cbd5f"
  },
  {
    "url": "nosql/mongodb/mongodb-ops.html",
    "revision": "e6323d060ba4e72331446c00b753e18d"
  },
  {
    "url": "nosql/mongodb/mongodb-quickstart.html",
    "revision": "c4248b2dc8c8385cb4b0b5412c3ba683"
  },
  {
    "url": "nosql/mongodb/mongodb-replication.html",
    "revision": "8baec24c29704eabf210b0ed98c81074"
  },
  {
    "url": "nosql/mongodb/mongodb-sharding.html",
    "revision": "c9f89cdfa4bcef023ed6f0bc4e4c6591"
  },
  {
    "url": "nosql/mongodb/mongodb-transaction.html",
    "revision": "beda28a60d1740541fa1c1c9f37cab7b"
  },
  {
    "url": "nosql/nosql-selection.html",
    "revision": "c92b5dbf8fae4f4ce0f9c2059a03f5a4"
  },
  {
    "url": "nosql/redis/index.html",
    "revision": "437ee9d5502823f96b29f4f58daa1365"
  },
  {
    "url": "nosql/redis/redis-action.html",
    "revision": "9fc1e27f15370fc827f17058d9cca8f7"
  },
  {
    "url": "nosql/redis/redis-cluster.html",
    "revision": "b9ff88b864537248d79cf37ea8b600a7"
  },
  {
    "url": "nosql/redis/redis-datatype.html",
    "revision": "6ae4196fe4e4f955620bdb30fc1c0ecf"
  },
  {
    "url": "nosql/redis/redis-interview.html",
    "revision": "b3103a71ad8905bc884d98f77f4d2183"
  },
  {
    "url": "nosql/redis/redis-ops.html",
    "revision": "98403227ca26b79d34d2cbabb553e5a9"
  },
  {
    "url": "nosql/redis/redis-persistence.html",
    "revision": "944db66dcf2a03a52623621a3de190d8"
  },
  {
    "url": "nosql/redis/redis-quickstart.html",
    "revision": "428bf388033aac8fe1013a255a06644a"
  },
  {
    "url": "nosql/redis/redis-replication.html",
    "revision": "6d6039b2bc54852b1e757776fd424930"
  },
  {
    "url": "nosql/redis/redis-sentinel.html",
    "revision": "e2f067aafb46db6ae3f307a29884c74a"
  },
  {
    "url": "sql/common/index.html",
    "revision": "f01c573936ec191ef93b3f38b466f318"
  },
  {
    "url": "sql/common/sql-advanced.html",
    "revision": "28727e0dfc2bb5c89cf06bbd00fd6874"
  },
  {
    "url": "sql/common/sql-cheat-sheet.html",
    "revision": "6072ae5286908a9fccbfd49eb0fff4f0"
  },
  {
    "url": "sql/common/sql-interview.html",
    "revision": "144ad955f176c8cd290c8604ce8f3425"
  },
  {
    "url": "sql/h2.html",
    "revision": "b4f43046a3da920d1c1dde42e9478e2c"
  },
  {
    "url": "sql/index.html",
    "revision": "1b00ec6b478993ec47510b736ec8e4b7"
  },
  {
    "url": "sql/mysql/index.html",
    "revision": "f66c99698f72139af3310443788a07ef"
  },
  {
    "url": "sql/mysql/mysql-config.html",
    "revision": "9dc3f597b51504bab4248d03d52dbbac"
  },
  {
    "url": "sql/mysql/mysql-faq.html",
    "revision": "41a649054b353d307de14574f42e194e"
  },
  {
    "url": "sql/mysql/mysql-index.html",
    "revision": "23d7ed92e10bd7a8d3b281d92a3797cd"
  },
  {
    "url": "sql/mysql/mysql-lock.html",
    "revision": "e971ba97d5284e0b6be8b7b04d89d713"
  },
  {
    "url": "sql/mysql/mysql-ops.html",
    "revision": "6b15999251f8c65ceb91fd6d82549a27"
  },
  {
    "url": "sql/mysql/mysql-optimization.html",
    "revision": "ce23e36a44fe4e835ff2c02a41526236"
  },
  {
    "url": "sql/mysql/mysql-quickstart.html",
    "revision": "165b0d55a19c1a6b468b2a911ffba5e6"
  },
  {
    "url": "sql/mysql/mysql-transaction.html",
    "revision": "0de2ccae33f1229f72fd7d6af390eafb"
  },
  {
    "url": "sql/mysql/mysql-workflow.html",
    "revision": "430ca7e21d27c85c412f4f3b463fdd9d"
  },
  {
    "url": "sql/postgresql.html",
    "revision": "eabd856e9c5f6254a74a399f02ac6e64"
  },
  {
    "url": "sql/sqlite.html",
    "revision": "a0b07d8fe98032c95415f1c51472aad5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
