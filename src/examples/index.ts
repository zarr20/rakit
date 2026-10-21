import type { PlaygroundExample } from '../components/playground/playground.types';
import { buttonBasicCode } from './button/basic';
import { buttonVariantsCode } from './button/variants';
import { inputBasicCode } from './input/basic';
import { inputValidationCode } from './input/validation';
import { routesBasicCode } from './routes/basic';
import { routesProtectedRouteCode } from './routes/protected-route';

export const PLAYGROUND_EXAMPLES: PlaygroundExample[] = [
  {
    id: 'button-basic',
    title: 'Button — Basic Counter',
    description: 'Basic button with reactive state and click interaction',
    category: 'Button',
    code: buttonBasicCode,
  },
  {
    id: 'button-variants',
    title: 'Button — Variants & Sizing',
    description: '10 visual variants, uniform xs-xl height scale, and loading states',
    category: 'Button',
    code: buttonVariantsCode,
  },
  {
    id: 'input-basic',
    title: 'Input — TextField & Form',
    description: 'TextField, Select, and Switch with two-way data binding',
    category: 'Input',
    code: inputBasicCode,
  },
  {
    id: 'input-validation',
    title: 'Input — Form Validation',
    description: 'Interactive form validation with error messages and submit handling',
    category: 'Input',
    code: inputValidationCode,
  },
  {
    id: 'routes-basic',
    title: 'Routes — Basic Navigation',
    description: 'Simulated route switching powered by rakit-routes',
    category: 'Routes',
    code: routesBasicCode,
  },
  {
    id: 'routes-protected',
    title: 'Routes — RouteGuard RBAC',
    description: 'Role-based access control protecting routes (Guest vs Admin)',
    category: 'Routes',
    code: routesProtectedRouteCode,
  },
];
