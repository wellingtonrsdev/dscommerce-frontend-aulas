/* eslint-disable @typescript-eslint/no-explicit-any */
export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: {...inputs[name], value: newValue} };
}

export function toValues(inputs: any) {
  const data: any = {};
  // eslint-disable-next-line no-var
  for (var name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}
