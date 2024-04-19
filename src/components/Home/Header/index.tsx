
const Header = () => {
    return (
        <div className={'fixed top-0 left-0 bg-[linear-gradient(to_right,rgb(252,211,77),rgb(249,115,22))] w-screen h-[52px] flex items-center px-4 justify-around'}>
            <ul className={'flex justify-around gap-10 text-white text-[20px] font-bold'}>
                <li className={'cursor-pointer'}>主页</li>
                <li className={'cursor-pointer'}>留言板</li>
                <li className={'cursor-pointer'}>笔记</li>
                <li className={'cursor-pointer'}>关于作者</li>
            </ul>
        </div>
    )
}

export default Header;
