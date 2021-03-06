import * as React from "react"
import { ComponentExt } from "@utils/reactExt"

class One extends ComponentExt<any> {
    render() {
        console.log(this.props.location.state, "this.props.match")
        const { state } = this.props.location
        return (
            <div style={{ color: "#fff" }}>
                文章详情：
                <a href={state.url} target="_blank">{state.title}</a>
            </div>
        )
    }
}

export default One
