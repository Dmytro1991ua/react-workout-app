export function handleKeyDownOnInputField(
  event: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>
): false | void {
  return ['e', 'E', '+', '-', '.'].includes(event.key) && event.preventDefault();
}
