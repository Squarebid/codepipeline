import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps, SecretValue } from "aws-cdk-lib";
import { Construct } from 'constructs';
import * as codecommit from "aws-cdk-lib/aws-codecommit";
import * as codepipeline from "aws-cdk-lib/aws-codepipeline";
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';

export class PipelineCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const sourceOutput = new codepipeline.Artifact();
    
    const sourceAction = new codepipeline_actions.GitHubSourceAction({
      actionName: 'GitHub_Source',
      owner: 'Squarebid',
      repo: 'codepipeline',
      oauthToken: SecretValue.secretsManager('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'),
      output: sourceOutput,
      branch: 'main', 
      });
      
  }
}
