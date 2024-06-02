import PropTypes from "prop-types";

function GroupTitleForm({title}) {
    return (
        <h2 className="text-2xl border-b border-slate-700">{title}</h2>
    )
}

GroupTitleForm.propTypes = {
    title: PropTypes.string
}

export default GroupTitleForm