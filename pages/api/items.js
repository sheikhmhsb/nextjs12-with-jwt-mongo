import connectDB from '../../utils/connectDB';
import Item from '../../models/Item';

connectDB();

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const items = await Item.find({});
                res.status(200).json(items);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving items' });
            }
            break;

        case 'POST':
            try {
                const { title, description } = req.body;
                if (!title || !description) {
                    return res.status(400).json({ message: 'Title and Description are required' });
                }
                const newItem = new Item({ title, description });
                await newItem.save();
                res.status(201).json(newItem);
            } catch (error) {
                res.status(500).json({ message: 'Error creating item' });
            }
            break;

        case 'PUT':
            try {
                const { id, title, description } = req.body;
                if (!id || !title || !description) {
                    return res.status(400).json({ message: 'ID, Title, and Description are required' });
                }
                const updatedItem = { title, description };
                const item = await Item.findByIdAndUpdate(id, updatedItem, { new: true });
                res.status(200).json(item);
            } catch (error) {
                res.status(500).json({ message: 'Error updating item' });
            }
            break;

        case 'DELETE':
            try {
                const { id } = req.body;
                if (!id) {
                    return res.status(400).json({ message: 'ID is required' });
                }
                await Item.findByIdAndRemove(id);
                res.status(200).json({ id });
            } catch (error) {
                res.status(500).json({ message: 'Error deleting item' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
