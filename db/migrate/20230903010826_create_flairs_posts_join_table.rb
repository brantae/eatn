class CreateFlairsPostsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_table :flairs_posts, id: false do |t|
      t.belongs_to :flair
      t.belongs_to :post
    end
  end
end
