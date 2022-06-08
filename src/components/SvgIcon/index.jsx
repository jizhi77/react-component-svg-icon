const importAll = (requireContext) => requireContext.keys().forEach(requireContext);
importAll(require.context('../icons', true, /\.svg$/));

const SvgIcon = (props) => {
    const {color, name, style} = props
    return (
        <svg className='svg-icon'
             aria-hidden='true'
             fill={color}
             style={{width: '25px', height: '25px', ...style}}
        >
            <use xlinkHref={`#icon-${name}`}/>
        </svg>)
}

export default SvgIcon
