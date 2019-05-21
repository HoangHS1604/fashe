<?php

class Product_model extends CI_Model
{
    public function insert_product()
    {    
        $data = array(
            'Title' => $this->input->post('txtName'),
            'Price' => $this->input->post('txtPrice'),
            'content' => $this->input->post('txtContent'),
            'description' => $this->input->post('txtDescrpt'),
            'created_date' => date("h:i:sa")
        );

        // users is the name of the db table you are inserting in
        return $this->db->insert('featuredproducts', $data);
    }   
}
?>