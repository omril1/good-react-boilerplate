'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('name', {
      type: String,
      alias: 'componentName',
      description: 'The name of the component',
      default: '',
      hide: true
    });
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'componentName',
        when: !this.options.name,
        message: 'The name of the component',
        default: this.options.name
      }
    ]).then(answers => {
      this.componentName = _.camelCase(this.options.name || answers.componentName);
      this.capitalizedName = _.capitalize(this.componentName);
    });
  }

  writing() {
    if (!this.capitalizedName) throw new Error('Missing capitalizedName');

    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath('src/components/' + this.capitalizedName),
      {
        componentName: this.componentName,
        capitalizedName: this.capitalizedName
      }
    );
  }

  end() {
    this.log(`Generated the ${chalk.green.underline.bold(this.capitalizedName)} component`);
  }
};
