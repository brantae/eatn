class ChangeUserAssociationForComments < ActiveRecord::Migration[6.1]
  def change
    change_column :comments, :user_id, :bigint, null: true
  end
end
