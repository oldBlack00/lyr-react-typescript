import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import { withRouter, HashRouter as Router, Route, Link } from "react-router-dom"
// import {
//     withRouter,
//     BrowserRouter as Router,
//     Route,
//     Link
// } from "react-router-dom"
import * as style from "./index.scss"
const TestData = [
    {
        id: 1,
        title: "React + TS 2.8：终极组件设计模式指南",
        url: "https://segmentfault.com/a/1190000015326439"
    },
    { id: 2, title: "Apple Blog", url: "http://132.232.34.190/" },
    {
        id: 3,
        title: "awesome-react",
        url: "https://github.com/enaqx/awesome-react"
    }
]
@(withRouter as any)
class Test extends ComponentExt<any> {
    renterLink(item: any) {
        return (
            <li key={item.id}>
                <Link
                    className={style.link}
                    to={{
                        pathname: `${this.props.match.url}/${item.id}`,
                        state: item
                    }}
                >
                    {item.title}
                </Link>
            </li>
        )
    }
    render() {
        console.log(this.props, "test")
        return (
            <div style={{ color: "#fff" }}>
                <span>主题列表</span>
                <ul>
                    {TestData.map(item => {
                        return this.renterLink(item)
                    })}
                </ul>
            </div>
        )
    }
}

export default Test
