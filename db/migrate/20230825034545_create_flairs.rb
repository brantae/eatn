class CreateFlairs < ActiveRecord::Migration[6.1]
  def change
    create_table :flairs do |t|
      t.string :name

      t.timestamps
    end
  end
end
