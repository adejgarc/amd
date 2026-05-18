import type { Meta, StoryObj } from '@storybook/angular';
import { Badge } from './badge';

const meta: Meta<Badge> = {
  title: 'GSIS/Demo/UI/Badge',
  component: Badge,
  tags: ['autodocs'], 
};
export default meta;

type Story = StoryObj<Badge>;

export const Primary: Story = {
  args: { label: 'Primary', color: 'primary' },
};

export const Danger: Story = {
  args: { label: 'Danger', color: 'danger' },
};

export const Clear: Story = {
  args: { label: 'Clear', color: 'clear' },
};