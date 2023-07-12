import React from 'react';
import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import { Engine } from 'tsparticles-engine/types/engine';

export const ParticlesFC = () => {
    const options: ISourceOptions = useMemo(() => {
        return {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                color: {
                    value: ['#03fb5a', '#ff27b7', '#e0e0e0', '#e7453c'],
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 1,
                },
                size: {
                    value: { min: 1, max: 8 },
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: '#808080',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    outModes: 'out',
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1,
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
        };
    }, []);

    const initParticles = useCallback(async (engine: Engine) => {
        loadFull(engine);
    }, []);

    return <Particles init={initParticles} options={options} />;
};
