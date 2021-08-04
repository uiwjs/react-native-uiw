import { Link } from 'react-router-dom';
import './style.less'
export default function HeaderTop() {
    return (
        <div className="header">
            <div className="inner-header flex">
                <header className="headerContent">
                    <div>
                        <h2>UIW Mobile RN</h2>
                        <p>
                            一个基于 React Native 的 UI 组件库
                        </p>
                    </div>
                    <Link to="/docs/getting-started">开始使用</Link>
                    <Link to="/components/about">组件文档</Link>
                </header>
            </div>
            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>
    )
}