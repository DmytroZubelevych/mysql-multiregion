var resp = {
  result: 0,
  nodes: [{
    nodeType: "mariadb-dockerized",
    count: 1,
    flexibleCloudlets: ${settings.sqldb_flexibleCloudlets:16},
    fixedCloudlets: ${settings.sqldb_fixedCloudlets:1},
    nodeGroup: "sqldb",
  }, {
    nodeType: "proxysql",
    count: 1,
    cloudlets: ${settings.proxysql_flexibleCloudlets:8},
    fixedCloudlets: ${settings.proxysql_fixedCloudlets:1},
    nodeGroup: "proxysql"
  }]
}
return resp;
