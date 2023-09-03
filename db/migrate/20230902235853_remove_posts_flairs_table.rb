class RemovePostsFlairsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :posts_flairs
  end
end
