import ReactTypingEffect from "react-typing-effect";
import ToolingIconList from "../../data/ToolingIconList";
import IconProps from "../../types/Icon";
import Icon from "../social/Icon";

export default function AboutMe() {
    const date = new Date();
    const totalExperience = date.getFullYear() - 2019;
    const icons = ToolingIconList;

    const skillIcons = icons.map((icon: IconProps) =>
        <Icon icon={icon} key={icon.id} />
    );

    return (
        <div className="bg-gray-700 rounded bg-opacity-75 p-4 mt-20 sm:m-8">
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
                    I'm also interested on making game in C++, some time i also make some fun web framework😄.
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
                    I been working on improving my PHP, Javascript, and other type of skills for {totalExperience} years and
                    I'am very confident for working alongside with these tooling and technology.
                </p>

                <div className="flex flex-row text-center justify-center flex-wrap md:w-[40%] mt-5 mx-auto">
                    {skillIcons}
                </div>
            </div>
        </div>
    );
}