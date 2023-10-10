import MainTaskFunctionality from './maintask';
import AddForm from './addform';
const ItemsList = ({data, onAdd, onDelete, onEdit}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <MainTaskFunctionality id={item.id} key={id} {...itemProps} onEdit={onEdit} onDelete={() => onDelete(id)}/>
        )
    });
    return(
        <div className="maintaskfunctionality">
        <div className="alltask">
            {elements}
        </div>
        <AddForm onAdd={onAdd} onDelete={onDelete}/>
        </div>
    )
}

export default ItemsList;