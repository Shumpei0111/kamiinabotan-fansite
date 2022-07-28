export default function H4(props) {
    const { text, classes } = props;

    return (
        <h4 className={`ml-8 mb-16 ${classes}`}>{text}</h4>
    )
};