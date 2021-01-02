const htmlDecode = (input) => {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}
//
const getDescription = (txt) => {
    const description = JSON.parse(htmlDecode(txt));
    return description.edited ? description.edited : description.original;
};
//
// const [description, setDescription] = useState(getDescription(props.location.state.task.text));
