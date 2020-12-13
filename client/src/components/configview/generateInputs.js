import { cloneDeep } from 'lodash';
import Input from '../inputs/input';
import Textarea from '../inputs/textarea';
import DropDown from '../inputs/dropdown';

function generateInputs(t, inputs, update, blocks) {
  const keys = Object.keys(inputs);

  function getTextarea(input, key) {
    return (
      <Textarea
        key={ key }
        title={ t(key) }
        value={ input.value }
        update={ str => {
          input.value = str;
          update({ ...inputs });
        } }
      />
    )
  }

  function getInput(input, key) {
    return (
      <Input
        key={ key }
        title={ t(key) }
        value={ input.value }
        update={ str => {
          input.value = str;
          update({ ...inputs });
        } }
      />
    )
  }

  function getDropdown(input, key) {
    return (
      <DropDown
        key={ key }
        prop={ 'name' }
        title={ t(key) }
        items={ input.options }
        update={ items => {
          const selected = items.find(block => block.selected);
          input.options = items;
          input.blockId = selected ? selected._id : null;
          update({ ...inputs });
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
    } else if (input.type === 'block') {
      let options = [];
      blocks.forEach(block => {
        if (block.type === input.blockType) {
          block.selected = block._id === input.blockId;
          options.push({ ...block });
        }
      })
      input.options = input.options ? input.options : options;
      return getDropdown(input, key);
    }
  });
}

export { generateInputs };
