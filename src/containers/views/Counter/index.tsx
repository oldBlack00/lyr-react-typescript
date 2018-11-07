import * as React from "react"
import { observer, inject } from "mobx-react"
import { Button } from "antd"
import { ComponentExt } from "@utils/reactExt"
import { GlobalStore } from "@models/globalStore"

interface IProps {
    globalStore?: GlobalStore
}
@inject("globalStore")
@observer
export default class Counter extends ComponentExt<IProps> {
    increase = () => {
        this.props.globalStore.increase()
    }
    decrease = () => {
        this.props.globalStore.decrease()
    }

    render() {
        const { num } = this.props.globalStore
        return (
            <div>
                <div>{num}</div>
                <Button onClick={this.increase}>增加</Button>
                <Button onClick={this.decrease}>减少--</Button>
            </div>
        )
    }
}
