import type { Meta, StoryObj } from '@storybook/angular';
import { SimpleButton } from './simple-button';

const meta: Meta<SimpleButton> = {
  id: 'gsis-demo-ui-simple-button',
  title: 'GSIS/Demo/UI/SimpleButton',
  component: SimpleButton,
  //tags: ['autodocs'],
  argTypes: {
    clicked: { action: 'button-clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'clear', 'danger'],
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <app-simple-button 
        [variant]="variant" 
        [disabled]="disabled" 
        [type]="type"
        (clicked)="clicked($event)">
        <i class="pi pi-check"></i> Start
      </app-simple-button>
    `,
  }),
};

export default meta;
type Story = StoryObj<SimpleButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Clear: Story = {
  args: {
    variant: 'clear',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
