import React from "react";
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

type Material = {
    _id?: string
    priority_name?: string
    name?: string
}

function MaterialEdit() {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const isNew = !id || id === 'new';
    const [name, setName] = React.useState('');
    const [loading, setLoading] = React.useState(!isNew);
    const [parentId, setParentId] = React.useState('');
    const [allMaterials, setAllMaterials] = React.useState<Material[]>([]);

    React.useEffect(() => {
        if (!isNew) {
            (async () => {
                try {
                    const token = sessionStorage.getItem('token') || '';
                    const res = await axios.get(`http://localhost:3030/server/api/v1/materials/${id}`, {
                        headers: token ? { Authorization: `Bearer ${token}` } : {}
                    });
                    const mat: any = res.data;
                    setName(mat.priority_name || mat.name || '');
                    setParentId(mat.parentId || '');
                } catch (e) {
                    console.error(e);
                } finally {
                    setLoading(false);
                }
            })();
        } else {
            setLoading(false);
        }
    }, [id, isNew]);

    React.useEffect(() => {
        (async () => {
            try {
                const token = sessionStorage.getItem('token') || '';
                const res = await axios.get('http://localhost:3030/server/api/v1/materials', {
                    headers: token ? { Authorization: `Bearer ${token}` } : {}
                });
                setAllMaterials(res.data || []);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const handleSave = async () => {
        try {
            const token = sessionStorage.getItem('token') || '';
            const payload: any = { priority_name: name };
            if (parentId) {
                payload.parentId = parentId;
            }
            if (isNew) {
                await axios.post('http://localhost:3030/server/api/v1/materials', payload, {
                    headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` }
                });
            } else {
                await axios.put(`http://localhost:3030/server/api/v1/materials/${id}`, payload, {
                    headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` }
                });
            }
            history.push('/materials');
        } catch (e: any) {
            console.error(e);
            const msg = e?.response?.data?.message || e?.message || 'Save failed';
            alert(msg);
        }
    };

    if (loading) return null;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{isNew ? 'Create material' : 'Edit material'}</Card.Title>
                <Form>
                    <Form.Group controlId="materialName">
                        <Form.Label>Material Name</Form.Label>
                        <Form.Control type="text" placeholder="Material Name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                    </Form.Group>
                    <Form.Group controlId="materialParent" className="mt-3">
                        <Form.Label>Parent Material (optional)</Form.Label>
                        <Form.Select value={parentId} onChange={(e) => setParentId(e.currentTarget.value)}>
                            <option value="">No parent</option>
                            {allMaterials
                                .filter((m: any) => {
                                    const mid = m && m._id && m._id.toString ? m._id.toString() : String(m?._id);
                                    return isNew || mid !== id;
                                })
                                .map((m: any) => {
                                    const mid = m && m._id && m._id.toString ? m._id.toString() : String(m?._id);
                                    const mname = m.priority_name || m.name || mid;
                                    return <option key={mid} value={mid}>{mname}</option>
                                })}
                        </Form.Select>
                    </Form.Group>
                </Form>
                <div className="mt-3">
                    <Button variant="primary" onClick={handleSave}>{isNew ? 'Create' : 'Save'}</Button>
                    <Button variant="secondary" className="ms-2" onClick={() => history.push('/materials')}>Cancel</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MaterialEdit;