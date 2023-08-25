class CreatePostsFlairs < ActiveRecord::Migration[6.1]
  def change
    create_table :posts_flairs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :flair, null: false, foreign_key: true

      t.timestamps
    end
  end
end
