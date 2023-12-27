/**
 * Render templates by replacing placeholders in a string.
 * @param template - A string with the placeholders.
 * @param view - An object with the templates to replace.
 * @returns A string with the template values replacing the given placeholders.
 * @example
 * ```js
 * const template = 'Logged in as {{user.name}} ({{user.email}}).';
 *
 * const view = {
 *  user: {
 *    name: 'John Doe',
 *    email: 'john.doe@example.com'
 *  }
 * };
 *
 * const result = render(template, view);
 * console.log(result);
 * // Logged in as John Doe (john.doe@example.com).
 * ```
 */
export function render(template: string, view: Record<string, any>): string {
  const regex = /\{\{([^{}]+)\}\}/g;

  return template.replace(regex, (_match, expression) => {
    const value = getValue(view, expression.trim());
    return value != null ? String(value) : '';
  });
}

function getValue(obj: Record<string, any>, expression: string): any {
  const keys = expression.split('.');
  let value = obj;

  for (const key of keys) {
    value = value[key];

    if (value == null) return null;
  }

  return value;
}
