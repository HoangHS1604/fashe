<?php 
$this->load->database();
$query = $this->db->get('featuredproducts');

foreach ($query->result() as $row)
{
        echo $row->title;
}
?>