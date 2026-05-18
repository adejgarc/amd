import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const Andromeda = definePreset(Aura, {
    semantic: {
        and: '{teal.500}',
        spacing: {
            button: {
                xl: {
                    paddingX: '20px',
                    paddingY: '20px',
                    fontSize: '20px',
                    borderRadius: '10px',
                },
                l: {
                    paddingX: '15px',
                    paddingY: '15px',
                    fontSize: '15px',
                    borderRadius: '8px'
                },
                m: {
                    paddingX: '10px',
                    paddingY: '10px',
                    fontSize: '10px',
                    borderRadius: '10px',
                },
                sm: {
                    paddingX: '5px',
                    paddingY: '5px',
                    fontSize: '5px',
                    borderRadius: '16px',
                },
                andromeda: {
                    paddingX: '12px',
                    paddingY: '12px',
                    fontSize: '12px',
                    borderRadius: '12px',
                    background: '{pink.100}',
                    color: '{pink.700}',
                    hoverBackground: '{pink.200}',
                    hoverColor: '{pink.800}',
                    activeBackground: '{pink.300}',
                }
            }
        }
    },
    components: {
        button: {
            colorScheme: {
                light: {
                    root: {
                        paddingX: '10px',
                        paddingY: '10px',
                        borderRadius: '8px',
                        primary: {
                            background: '{and}',
                            color: '{indigo.700}',
                            hoverBackground: '{indigo.100}',
                            hoverColor: '{indigo.700}',
                            activeBackground: '{indigo.200}',
                            borderColor: '{indigo.300}',
                        },
                        secondary: {
                            background: '{surface.100}',
                            color: '{surface.700}',
                            hoverBackground: '{surface.200}',
                            hoverColor: '{surface.800}',
                            activeBackground: '{surface.300}',
                        },
                        success: {
                            background: '{emerald.100}',
                            color: '{emerald.700}',
                            hoverBackground: '{emerald.200}',
                            hoverColor: '{emerald.800}',
                            activeBackground: '{emerald.300}',
                        },
                        info: {
                            background: '{blue.100}',
                            color: '{blue.700}',
                            hoverBackground: '{blue.200}',
                            hoverColor: '{blue.800}',
                            activeBackground: '{blue.300}',
                        },
                        warn: {
                            background: '{orange.100}',
                            color: '{orange.700}',
                            hoverBackground: '{orange.200}',
                            hoverColor: '{orange.800}',
                            activeBackground: '{orange.300}',
                        },
                        help: {
                            background: '{purple.100}',
                            color: '{purple.700}',
                            hoverBackground: '{purple.200}',
                            hoverColor: '{purple.800}',
                            activeBackground: '{purple.300}',
                        },
                        danger: {
                            background: '{red.100}',
                            color: '{red.700}',
                            hoverBackground: '{red.200}',
                            hoverColor: '{red.800}',
                            activeBackground: '{red.300}',
                        },
                        contrast: {
                            background: '{surface.900}',
                            color: '{surface.0}',
                            hoverBackground: '{surface.700}',
                            hoverColor: '{surface.0}',
                            activeBackground: '{surface.600}',
                        },
                    }
                },
                dark: {
                    root: {
                        borderRadius: '0.5rem',
                        primary: {
                            background: '{and}',
                            color: '{emerald.700}',
                            hoverBackground: '{emerald.100}',
                            hoverColor: '{emerald.700}',
                            activeBackground: '{emerald.200}',
                        },
                        secondary: {
                            background: '{surface.800}',
                            color: '{surface.100}',
                            hoverBackground: '{surface.700}',
                            hoverColor: '{surface.0}',
                            activeBackground: '{surface.600}',
                        },
                        success: {
                            background: '{emerald.200}',
                            color: '{emerald.900}',
                            hoverBackground: '{emerald.300}',
                            hoverColor: '{emerald.950}',
                            activeBackground: '{emerald.400}',
                        },
                        info: {
                            background: '{blue.200}',
                            color: '{blue.900}',
                            hoverBackground: '{blue.300}',
                            hoverColor: '{blue.950}',
                            activeBackground: '{blue.400}',
                        },
                        warn: {
                            background: '{orange.200}',
                            color: '{orange.900}',
                            hoverBackground: '{orange.300}',
                            hoverColor: '{orange.950}',
                            activeBackground: '{orange.400}',
                        },
                        help: {
                            background: '{purple.200}',
                            color: '{purple.900}',
                            hoverBackground: '{purple.300}',
                            hoverColor: '{purple.950}',
                            activeBackground: '{purple.400}',
                        },
                        danger: {
                            background: '{red.200}',
                            color: '{red.900}',
                            hoverBackground: '{red.300}',
                            hoverColor: '{red.950}',
                            activeBackground: '{red.400}',
                        },
                        contrast: {
                            background: '{surface.0}',
                            color: '{surface.900}',
                            hoverBackground: '{surface.200}',
                            hoverColor: '{surface.900}',
                            activeBackground: '{surface.300}',
                        }
                    }
                }
            }
        }
    }
});
