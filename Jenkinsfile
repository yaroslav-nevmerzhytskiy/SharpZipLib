@Library('plugins-jenkins-pipeline@2.0.1') _

pluginsPipeline {
  scmUrl = 'git@github.com:yaroslav-nevmerzhytskiy/SharpZipLib.git'
  vaultArtifactoryTeam = 'fst'
  slackChannel = 'fst-builds'
  
  dotNetProjects = [
    [
      'name' : 'dotnet-sources',
      'runTests': true
    ]
  ]
  unityPluginProjects = [
  ]
  sampleAppProjects = [
  ]
}
