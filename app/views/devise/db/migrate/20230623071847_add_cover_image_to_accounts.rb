class AddCoverImageToAccounts < ActiveRecord::Migration[7.0]
  def change
    add_column :accounts, :cover_image, :string
  end
end
