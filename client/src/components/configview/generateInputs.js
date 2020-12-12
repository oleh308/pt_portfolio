import { cloneDeep } from 'lodash';
import Input from '../inputs/input';
import Textarea from '../inputs/textarea';

function generateInputs(inputs, update) {
  const keys = Object.keys(inputs);

  function getTextarea(input, key) {
    return (
      <Textarea
        key={ key }
        title={ key }
        value={ input.value }
        update={ str => {
          input.value = str,
          update({ ...inputs })
        } }
      />
    )
  }

  function getInput(input, key) {
    return (
      <Input
        key={ key }
        title={ key }
        value={ input.value }
        update={ str => {
          input.value = str,
          update({ ...template })
        } }
      />
    )
  }

  return keys.map((key, index) => {
    const input = inputs[key];
    if (input.type === 'textarea') {
      return getTextarea(input, key);
    } else if (input.type === 'input') {
      return getInput(input, key);
    }
  });
}

export { generateInputs };
