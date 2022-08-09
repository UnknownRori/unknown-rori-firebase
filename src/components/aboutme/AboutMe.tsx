import ReactTypingEffect from "react-typing-effect";
import ToolingIconList from "../../data/ToolingIconList";
import IconProps from "../../types/Icon";
import Icon from "../social/Icon";

export default function AboutMe() {
    const icons = ToolingIconList;

    const skillIcons = icons.map((icon: IconProps) =>
        <Icon icon={icon} key={icon.id} />
    );

    return (
        <div className="bg-gray-700 rounded bg-opacity-75 p-4 mt-20">
            <div>
                <ReactTypingEffect text={
                    ['About me']
                }
                    className="md:text-2xl sm:text:lg lg:text-3xl underline my-10"
                    displayTextRenderer={(text: string) => {
                        return (
                            <h3 className="md:text-2xl sm:text:lg lg:text-3xl underline">
                                {text}
                            </h3>
                        );
                    }} typingDelay={500} />
            </div>

            <article className="flex flex-row my-4 text-lg">
                <p>
                    Hello my name is <span className="profile-name">UnknownRori</span>. I'm a college student and now i
                    currently learning to become fullstack developer, i enjoy making a web apps using Laravel and TailwindCSS.
                    I'm also interested on making software.
                </p>
            </article>

            <div className="m-auto text-center mt-4 text-lg">
                <div>
                    <ReactTypingEffect text={
                        ['My Skills']
                    }
                        className="md:text-2xl sm:text:lg lg:text-3xl underline my-10"
                        displayTextRenderer={(text: string) => {
                            return (
                                <h3 className="md:text-2xl sm:text:lg lg:text-3xl underline">
                                    {text}
                                </h3>
                            );
                        }} typingDelay={500} />
                </div>
                <p>
                    I been working on improving my PHP and Javascript skills for 2 years and
                    I'am very confident for working alongside with these tooling.
                </p>

                <div className="flex flex-row text-center justify-center flex-wrap md:w-[60%] mt-5 mx-auto">
                    {skillIcons}
                </div>
            </div>
        </div>
    );
}