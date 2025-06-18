import { ReactEnv } from '@bitdev/react.react-env';

export class CustomReactEnv extends ReactEnv {
  getDependencies() {
    return {
      react: '^18.0.0',
      'react-dom': '^18.0.0',
      vite: '^5.0.0',
      vitest: '^5.0.0',
      typescript: '^5.0.0',
    };
  }

  compiler = super.compiler;

  tester = super.tester;
}

export default new CustomReactEnv();