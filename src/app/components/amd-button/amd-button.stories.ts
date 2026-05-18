import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { providePrimeNG } from 'primeng/config';
import { AmdButton } from './amd-button';
import { Andromeda } from '../../../styles/andromeda-config';
import { CustomStyleDirective } from '../../directives/custom-style';
import { AndromedaStyleDirective } from '../../directives/andromeda-style';

const meta: Meta<AmdButton> = {
  id: 'gsis-demo-ui-amd-button',
  title: 'GSIS/Demo/UI/AmdButton',
  component: AmdButton,
  tags: ['autodocs'],
  //   argTypes: {
  //   amdSize: {
  //     control: 'select',
  //     options: ['sm', 'm', 'l', 'xl'], 
  //     description: 'Tokens size Andromeda'
  //   },
  //   severity: {
  //     control: 'select',
  //     options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast']
  //   }
  // },
  decorators: [
    moduleMetadata({
      imports: [AmdButton, CustomStyleDirective, AndromedaStyleDirective], 
    }),
    applicationConfig({
      providers: [
        providePrimeNG({
          theme: {
            preset: Andromeda,
            options: {
              darkModeSelector: '.amd-dark',
              prefix: 'amd',
            },
          },
        }),
      ],
    }),
  ],
};



export default meta;
type Story = StoryObj<AmdButton>;

export const Default: Story = {
  args: {
    label: 'Primary',
  },
};

export const PrimaryAndSecondary: Story = {
  decorators: [
    moduleMetadata({
      imports: [AmdButton, CustomStyleDirective, AndromedaStyleDirective],
    }),
  ],
  render: () => ({
    template: `
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <amd-button label="Primary"></amd-button>
        <amd-button label="Secondary" severity="secondary"></amd-button>
      </div>
    `,
  }),
};

export const AllSeverities: Story = {
  decorators: [
    moduleMetadata({
      imports: [AmdButton, CustomStyleDirective, AndromedaStyleDirective],
    }),
  ],
  render: () => ({
    template: `
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <amd-button label="Primary"></amd-button>
        <amd-button label="Secondary" severity="secondary"></amd-button>
        <amd-button label="Success" severity="success"></amd-button>
        <amd-button label="Info" severity="info"></amd-button>
        <amd-button label="Warn" severity="warn"></amd-button>
        <amd-button label="Help" severity="help"></amd-button>
        <amd-button label="Danger" severity="danger"></amd-button>
        <amd-button label="Contrast" severity="contrast"></amd-button>
      </div>
    `,
  }),
};

export const LightAndDark: Story = {
  decorators: [
    moduleMetadata({
      imports: [AmdButton, CustomStyleDirective, AndromedaStyleDirective],
    }),
  ],
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
        <section style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.75rem; background: #ffffff;">
          <h4 style="margin: 0 0 0.75rem; color: #374151;">Light</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <amd-button label="Primary"></amd-button>
            <amd-button label="Secondary" severity="secondary"></amd-button>
            <amd-button label="Success" severity="success"></amd-button>
            <amd-button label="Info" severity="info"></amd-button>
          </div>
        </section>

        <section class="amd-dark" style="padding: 1rem; border: 1px solid #374151; border-radius: 0.75rem; background: #111827;">
          <h4 style="margin: 0 0 0.75rem; color: #e5e7eb;">Dark</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <amd-button label="Primary"></amd-button>
            <amd-button label="Secondary" severity="secondary"></amd-button>
            <amd-button label="Success" severity="success"></amd-button>
            <amd-button label="Info" severity="info"></amd-button>
          </div>
        </section>
      </div>
    `,
  }),
};

export const CustomSizes: Story = {
  decorators: [
    moduleMetadata({
      imports: [AmdButton, CustomStyleDirective, AndromedaStyleDirective],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
           <span style="width: 100px">SM:</span>
           <amd-button label="Tamaño SM" amdSize="sm"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
           <span style="width: 100px">M (Base):</span>
           <amd-button label="Tamaño M" amdSize="m"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
           <span style="width: 100px">L:</span>
           <amd-button label="Tamaño L" amdSize="l"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
           <span style="width: 100px">XL:</span>
           <amd-button label="Tamaño XL" amdSize="xl"></amd-button>
        </div>      
      </div>
    `,
  }),
};


export const AllAttributes: Story = {
   decorators: [
    moduleMetadata({
      imports: [AmdButton, CustomStyleDirective, AndromedaStyleDirective],
    }),
  ],
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 50px">SM</span>
          <amd-button sm label="Pequeño"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 50px">M</span>
          <amd-button m label="Mediano (Default)"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 50px">L</span>
          <amd-button l label="Grande"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 50px">XL</span>
          <amd-button xl label="Extra Grande"></amd-button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 50px">Andromeda</span>
          <amd-button andromeda label="Andromeda"></amd-button>
        </div>
      </div>
    `,
  }),
};