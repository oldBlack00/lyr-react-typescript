import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import Controls from "./Controls"
import TrackInfo from "./TrackInfo"
import * as style from "./index.scss"
const songLists = [
    {
        title: "5秒",
        name: "王北车",
        picUrl: require("@assets/songs/1.jpg"),
        mp3Url: require("file-loader!../../assets/songs/8744.wav")
    },
    {
        title: "陷阱",
        name: "王北车",
        picUrl: require("@assets/songs/1.jpg"),
        mp3Url: require("file-loader!../../assets/songs/1王北车-陷阱.mp3")
    },
    {
        title: "去年夏天",
        name: "王大毛",
        picUrl: require("@assets/songs/2.jpg"),
        mp3Url: require("file-loader!../../assets/songs/2王大毛-去年夏天.mp3")
    }
]
interface Istates {
    playStatus: boolean
    currentIndex: number
    totalLength: number
}

class Player extends ComponentExt<any, Istates> {
    public state = {
        playStatus: true,
        currentIndex: 0,
        totalLength: songLists.length
    }
    componentDidMount() {
        this.updatePlayStatus()
    }
    // 播放器状态更新
    updatePlayStatus = () => {
        const audio = document.querySelector("#audio")
        if (this.state.playStatus) {
            audio.play()
        } else {
            audio.pause()
        }
    }
    // 播放事件
    play = () => {
        this.setState(
            (prev: any) => {
                return { playStatus: !prev.playStatus }
            },
            () => this.updatePlayStatus()
        )
    }
    // 上一曲
    previous = () => {
        if (this.state.currentIndex - 1 < 0) {
            this.$message.warn("已经没有上一首了")
        } else {
            this.setState(
                (prev: any) => ({ currentIndex: --prev.currentIndex }),
                () => {
                    this.updatePlayStatus()
                    this.$message.success(
                        `上一首：${songLists[this.state.currentIndex].title}`
                    )
                }
            )
        }
    }
    // 下一曲
    next = () => {
        if (this.state.currentIndex + 1 > this.state.totalLength - 1) {
            this.$message.warn("已经没有下一首了")
        } else {
            this.setState(
                (prev: any) => ({ currentIndex: ++prev.currentIndex }),
                () => {
                    this.updatePlayStatus()
                    this.$message.success(
                        `下一首：${songLists[this.state.currentIndex].title}`
                    )
                }
            )
        }
    }
    // 音乐结束事件回调
    onEnded = () => {
        this.next()
    }
    render() {
        return (
            <div className={style.player}>
                <TrackInfo info={songLists[this.state.currentIndex]} />
                <Controls
                    playStatus={this.state.playStatus}
                    onPlay={this.play}
                    onPrevious={this.previous}
                    onNext={this.next}
                />
                <audio
                    id="audio"
                    src={songLists[this.state.currentIndex].mp3Url}
                    onEnded={this.onEnded}
                >
                    Your browser does not support the audio element.
                </audio>
            </div>
        )
    }
}

export default Player
