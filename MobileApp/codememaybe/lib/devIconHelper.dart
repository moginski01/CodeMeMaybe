import 'package:flutter/material.dart';
import "package:dev_icons/dev_icons.dart";

class DevIconHelper {
  static final Map<String, IconData> icons = {

    "NixOS": DevIcons.nixosPlain,
    "Perl": DevIcons.perlPlain,
    "TensorFlow": DevIcons.tensorflowLine,
    "Zig": DevIcons.zigPlainWordmark,
    "Raspberry Pi": DevIcons.raspberrypiLineWordmark,
    "Embedded C": DevIcons.embeddedcPlainWordmark,
    "LabView": DevIcons.labviewPlainWordmark,
    "MODX": DevIcons.modxPlainWordmark,
    "Knockout": DevIcons.knockoutPlainWordmark,
    "RStudio": DevIcons.rstudioPlain,
    "Phalcon": DevIcons.phalconPlain,
    "Minitab": DevIcons.minitabPlain,
    "Bulma": DevIcons.bulmaPlain,
    "SPSS": DevIcons.spssPlain,
    "Matlab": DevIcons.matlabLine,
    "Karma": DevIcons.karmaPlain,
    "Jest": DevIcons.jestPlain,
    "CircleCI": DevIcons.circleciPlainWordmark,
    "Codecov": DevIcons.codecovPlain,
    "Magento": DevIcons.magentoLine,
    "Shopware": DevIcons.shopwareOriginalWordmark,
    "Salesforce": DevIcons.salesforcePlain,
    "Vue Storefront": DevIcons.vuestorefrontPlain,
    "Unix": DevIcons.unixOriginal,
    "Godot": DevIcons.godotPlainWordmark,
    "VS Code": DevIcons.vscodePlainWordmark,
    "Julia": DevIcons.juliaPlainWordmark,
    "Crystal": DevIcons.crystalOriginalWordmark,
    "Tailwind CSS": DevIcons.tailwindcssPlain,
    "Weblate": DevIcons.weblatePlainWordmark,
    "The Algorithms": DevIcons.thealgorithmsPlainWordmark,
    "Spring": DevIcons.springPlainWordmark,
    "Rails": DevIcons.railsPlainWordmark,
    "Phoenix": DevIcons.phoenixPlainWordmark,
    "Next.js": DevIcons.nextjsOriginalWordmark,
    "Lua": DevIcons.luaPlainWordmark,
    "GraphQL": DevIcons.graphqlPlainWordmark,
    "Gitter": DevIcons.gitterPlainWordmark,
    "Figma": DevIcons.figmaPlain,
    "DigitalOcean": DevIcons.digitaloceanPlainWordmark,
    ".NET Core": DevIcons.dotnetcorePlain,
    "Dart": DevIcons.dartPlainWordmark,
    "R": DevIcons.rPlain,
    "OCaml": DevIcons.ocamlPlainWordmark,
    "Jupyter": DevIcons.jupyterPlainWordmark,
    "F#": DevIcons.fsharpPlain,
    "Elixir": DevIcons.elixirPlainWordmark,
    "Aarch64": DevIcons.aarch64Plain,
    "XD": DevIcons.xdLine,
    "uWSGI": DevIcons.uwsgiPlain,
    "Microsoft SQL Server": DevIcons.microsoftsqlserverPlainWordmark,
    "SQLAlchemy": DevIcons.sqlalchemyOriginalWordmark,
    "RocksDB": DevIcons.rocksdbPlain,
    "Objective-C": DevIcons.objectivecPlain,
    "Kubernetes": DevIcons.kubernetesPlainWordmark,
    "Google Cloud": DevIcons.googlecloudPlainWordmark,
    "Flask": DevIcons.flaskOriginalWordmark,
    "Firebase": DevIcons.firebasePlainWordmark,
    "Eleventy": DevIcons.eleventyPlain,
    "Appwrite": DevIcons.appwritePlainWordmark,
    "Bash": DevIcons.bashPlain,
    "WooCommerce": DevIcons.woocommercePlainWordmark,
    "Typo3": DevIcons.typo3PlainWordmark,
    "Premiere Pro": DevIcons.premiereproPlain,
    "NestJS": DevIcons.nestjsPlainWordmark,
    "Material-UI": DevIcons.materialuiPlain,
    "Kotlin": DevIcons.kotlinPlainWordmark,
    "Jenkins": DevIcons.jenkinsPlain,
    "Haxe": DevIcons.haxePlain,
    "Gatsby": DevIcons.gatsbyPlainWordmark,
    "Flutter": DevIcons.flutterPlain,
    "Composer": DevIcons.composerLineWordmark,
    "After Effects": DevIcons.aftereffectsPlain,
    "YunoHost": DevIcons.yunohostPlain,
    "Redux": DevIcons.reduxOriginal,
    "ClojureScript": DevIcons.clojurescriptPlain,
    "Clojure": DevIcons.clojureLine,
    "Mocha": DevIcons.mochaPlain,
    "Haskell": DevIcons.haskellPlain,
    "CodePen": DevIcons.codepenOriginalWordmark,
    "Groovy": DevIcons.groovyPlain,
    "Rust": DevIcons.rustPlain,
    "Scala": DevIcons.scalaPlainWordmark,
    "Grails": DevIcons.grailsPlain,
    "Sketch": DevIcons.sketchLineWordmark,
    "NPM": DevIcons.npmOriginalWordmark,
    "Ionic": DevIcons.ionicOriginalWordmark,
    "Ember": DevIcons.emberOriginalWordmark,
    "Electron": DevIcons.electronOriginalWordmark,
    "Vagrant": DevIcons.vagrantPlainWordmark,
    "Yarn": DevIcons.yarnPlainWordmark,
    "Handlebars": DevIcons.handlebarsPlainWordmark,
    "CouchDB": DevIcons.couchdbPlainWordmark,
    "Behance": DevIcons.behancePlainWordmark,
    "LinkedIn": DevIcons.linkedinPlainWordmark,
    "Ceylon": DevIcons.ceylonPlain,
    "Elm": DevIcons.elmPlainWordmark,
    "CakePHP": DevIcons.cakephpPlainWordmark,
    "Stylus": DevIcons.stylusOriginal,
    "Express": DevIcons.expressOriginalWordmark,
    "Devicon": DevIcons.deviconPlainWordmark,
    "IntelliJ": DevIcons.intellijPlainWordmark,
    "PyCharm": DevIcons.pycharmPlainWordmark,
    "RubyMine": DevIcons.rubyminePlainWordmark,
    "WebStorm": DevIcons.webstormPlainWordmark,
    "Tomcat": DevIcons.tomcatLineWordmark,
    "Vue.js": DevIcons.vuejsLineWordmark,
    "Swift": DevIcons.swiftPlainWordmark,
    "Webpack": DevIcons.webpackPlainWordmark,
    "Visual Studio": DevIcons.visualstudioPlainWordmark,
    "Slack": DevIcons.slackPlainWordmark,
    "Sequelize": DevIcons.sequelizePlainWordmark,
    "TypeScript": DevIcons.typescriptPlain,
    "Babel": DevIcons.babelPlain,
    "Facebook": DevIcons.facebookPlain,
    "Google": DevIcons.googlePlainWordmark,
    "Twitter": DevIcons.twitterOriginal,
    "Jasmine": DevIcons.jasminePlain,
    "Gatling": DevIcons.gatlingPlain,
    "PHPStorm": DevIcons.phpstormPlain,
    "SourceTree": DevIcons.sourcetreeOriginal,
    "SSH": DevIcons.sshOriginal,
    "Jeet": DevIcons.jeetPlain,
    "GitLab": DevIcons.gitlabPlain,
    "GitHub": DevIcons.githubOriginal,
    "D3.js": DevIcons.d3jsPlain,
    "Confluence": DevIcons.confluenceOriginal,
    "Bitbucket": DevIcons.bitbucketOriginal,
    "Gradle": DevIcons.gradlePlain,
    "Cucumber": DevIcons.cucumberPlain,
    "Protractor": DevIcons.protractorPlain,
    "Safari": DevIcons.safariLineWordmark,
    "JetBrains": DevIcons.jetbrainsPlain,
    "Django": DevIcons.djangoLine,
    "GIMP": DevIcons.gimpPlain,
    "Red Hat": DevIcons.redhatPlainWordmark,
    "C++": DevIcons.cplusplusLine,
    "C#": DevIcons.csharpLine,
    "C": DevIcons.cLine,
    "Node-Webkit": DevIcons.nodewebkitLineWordmark,
    "Nginx": DevIcons.nginxOriginal,
    "Erlang": DevIcons.erlangPlainWordmark,
    "Doctrine": DevIcons.doctrineLineWordmark,
    "Apache": DevIcons.apacheLineWordmark,
    "Go": DevIcons.goLine,
    "Redis": DevIcons.redisPlainWordmark,
    "Meteor": DevIcons.meteorPlainWordmark,
    "Heroku": DevIcons.herokuLineWordmark,
    "Docker": DevIcons.dockerPlainWordmark,
    "Symfony": DevIcons.symfonyOriginalWordmark,
    "React": DevIcons.reactOriginalWordmark,
    "AWS": DevIcons.amazonwebservicesOriginal,
    "Android": DevIcons.androidPlainWordmark,
    "AngularJS": DevIcons.angularjsPlainWordmark,
    "Appcelerator": DevIcons.appceleratorOriginal,
    "Apple": DevIcons.appleOriginal,
    "Atom": DevIcons.atomOriginalWordmark,
    "Backbone.js": DevIcons.backbonejsPlainWordmark,
    "Bootstrap": DevIcons.bootstrapPlainWordmark,
    "Bower": DevIcons.bowerLineWordmark,
    "Chrome": DevIcons.chromePlain,
    "CSS3": DevIcons.css3PlainWordmark,
    "Debian": DevIcons.debianPlainWordmark,
    "DotNet": DevIcons.dotnetPlainWordmark,
    "Drupal": DevIcons.drupalPlainWordmark,
    "Firefox": DevIcons.firefoxPlainWordmark,
    "Foundation": DevIcons.foundationPlainWordmark,
    "Git": DevIcons.gitPlainWordmark,
    "Grunt": DevIcons.gruntPlainWordmark,
    "Gulp": DevIcons.gulpPlain,
    "HTML5": DevIcons.html5PlainWordmark,
    "IE10": DevIcons.ie10Original,
    "Illustrator": DevIcons.illustratorPlain,
    "Inkscape": DevIcons.inkscapePlainWordmark,
    "Java": DevIcons.javaPlainWordmark,
    "JavaScript": DevIcons.javascriptPlain,
    "JQuery": DevIcons.jqueryPlainWordmark,
    "KrakenJS": DevIcons.krakenjsPlain,
    "Laravel": DevIcons.laravelPlainWordmark,
    "Less": DevIcons.lessPlainWordmark,
    "Linux": DevIcons.linuxPlain,
    "MongoDB": DevIcons.mongodbPlainWordmark,
    "Moodle": DevIcons.moodlePlainWordmark,
    "MySQL": DevIcons.mysqlPlainWordmark,
    "NodeJS": DevIcons.nodejsPlainWordmark,
    "Oracle": DevIcons.oracleOriginal,
    "Photoshop": DevIcons.photoshopPlain,
    "PHP": DevIcons.phpPlain,
    "PostgreSQL": DevIcons.postgresqlPlainWordmark,
    "Python": DevIcons.pythonPlain,
    "Ruby": DevIcons.rubyPlainWordmark,
    "Sass": DevIcons.sassOriginal,
    "Ubuntu": DevIcons.ubuntuPlainWordmark,
    "Windows8": DevIcons.windows8Original,
    "WordPress": DevIcons.wordpressPlainWordmark,
    "Yii": DevIcons.yiiPlainWordmark,
    "Zend": DevIcons.zendPlainWordmark,
  };
}