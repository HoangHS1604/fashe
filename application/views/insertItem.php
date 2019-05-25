<div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Quick Example</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form" method="POST" action="<?=base_url()?>/controllers/Product/insert_product">
              <div class="box-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" id="txtName" placeholder="Enffterere Naseme of prfgffhassfdffghoduct" name="txtName">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Price</label>
                  <input type="text" class="form-control" id="txtPrice" placeholder="Price" name="txtPrice">
                </div>
                <div class="form-group">
                  <label>Content</label>
                  <textarea class="form-control" rows="3" placeholder="Ekghhgkhnter ..." name="txtContent"></textarea>
                </div>
                <div class="form-group">
                  <label>Discription</label>
                  <textarea class="form-control" rows="3" placeholder="Enter ..." name="txtDescript"></textarea>
                </div>
                <!-- <div class="form-group">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" id="exampleInputFile">
                </div> -->
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>