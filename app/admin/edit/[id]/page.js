import EditForm from "@/Components/admin/EditForm" 

const EditPage = async ({params}) => {
    const {id} = params
    const item = await fetch (`http://localhost:3000/api/product/${id}`, {
        cache: "no-store"
    }).then (res => res.json())

    return (
        <div>
            <EditForm item={item} />
        </div>
    )
}
export default EditPage