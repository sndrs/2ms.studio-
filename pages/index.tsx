import Link from 'next/link';
import { Component } from 'react';
import pages from '../.scraped/urls.json';
import Page from '../components/Page';

const random = (min: number = random(-10, 0), max: number = random(0, 10)) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const trans = 0.4;
const red = `rgba(255, 0, 0, ${trans})`;
const green = `rgba(0, 255, 0, ${trans})`;
const blue = `rgba(0, 0, 255, ${trans})`;
const yellow = `rgba(255, 255, 0, ${trans})`;

export default class Home extends Component {
    render() {
        return (
            <Page align="center" direction="row">
                <h1>2MS</h1>
                <ul>
                    <li>
                        <Link href="/bio">
                            <a>bio</a>
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:dan@2MS.studio">contact</a>
                    </li>
                </ul>
                <style jsx>{`
                    ul {
                        list-style: none;
                        padding: 0;
                        display: flex;
                    }
                    li:before {
                        padding: 0 1ch;
                        content: '·';
                    }
                `}</style>
                <div
                    className="sites"
                    dangerouslySetInnerHTML={{
                        __html: pages[2],
                    }}
                />
                <style jsx global>{`
                    @keyframes shadow {
                        0% {
                            text-shadow: ${random()}px ${random()}px 0 ${red},
                                ${random()}px ${random()}px 0 ${green},
                                ${random()}px ${random()}px 0 ${blue},
                                ${random()}px ${random()}px 0 ${yellow};
                        }

                        10% {
                            text-shadow: ${random()}px ${random()}px 0 ${red},
                                ${random()}px ${random()}px 0 ${green},
                                ${random()}px ${random()}px 0 ${blue},
                                ${random()}px ${random()}px 0 ${yellow};
                        }

                        50% {
                            text-shadow: ${random()}px ${random()}px 0 ${red},
                                ${random()}px ${random()}px 0 ${green},
                                ${random()}px ${random()}px 0 ${blue},
                                ${random()}px ${random()}px 0 ${yellow};
                        }

                        70% {
                            text-shadow: ${random()}px ${random()}px 0 ${red},
                                ${random()}px ${random()}px 0 ${green},
                                ${random()}px ${random()}px 0 ${blue},
                                ${random()}px ${random()}px 0 ${yellow};
                        }

                        100% {
                            text-shadow: ${random()}px ${random()}px 0 ${red},
                                ${random()}px ${random()}px 0 ${green},
                                ${random()}px ${random()}px 0 ${blue},
                                ${random()}px ${random()}px 0 ${yellow};
                        }
                    }
                    @keyframes resize {
                        from {
                            width: 100%;
                        }

                        to {
                            width: 0%;
                        }
                    }
                    .sites {
                        position: relative;
                        left: -20px;
                        top: -140px;
                        width: 100%;
                        z-index: -1;
                        pointer-events: none;
                        -webkit-font-smoothing: none;
                        color: rgba(255, 255, 255, 0.3);
                        animation-duration: 1ms, 500s;
                        animation-name: shadow, resize;
                        animation-iteration-count: infinite, 1;
                        animation-direction: alternate, normal;
                        animation-timing-function: ease-out, linear;
                        animation-fill-mode: forwards;
                        animation-delay: 0s;
                        text-shadow: ${random()}px ${random()}px 0 ${red},
                            ${random()}px ${random()}px 0 ${green},
                            ${random()}px ${random()}px 0 ${blue},
                            ${random()}px ${random()}px 0 ${yellow};
                        transform-origin: top left;
                        transform: rotate(1deg);
                    }

                    .sites * {
                        font-weight: normal !important;
                        font-family: serif !important;
                        font-size: 40px !important;
                        line-height: 1.5 !important;
                        font-style: italic;
                    }
                `}</style>
            </Page>
        );
    }
}