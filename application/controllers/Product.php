<?php

class Product extends CI_Controller {
    public function insert_product()
            {
        $this->load->helper(array('form', 'url'));

        
            $this->load->model('Product_model');
            $this->Product_model->insert_product();
        
    }
}
?>